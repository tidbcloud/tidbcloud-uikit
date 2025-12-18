/**
 * Script to generate llms.txt from documentation files
 *
 * This script merges documentation files from the docs folder into a single llms.txt file
 * for use by AI assistants and LLMs.
 *
 * Usage: pnpm tsx scripts/generateLlmsTxt.ts
 */

import * as fs from 'node:fs'
import * as path from 'node:path'

const DOCS_DIR = path.join(__dirname, '../packages/documentation/pages/docs')
const OUTPUT_FILE = path.join(__dirname, '../packages/uikit/llms.txt')

interface DocSection {
  title: string
  description: string
  files: string[]
  basePath: string
  importPath: string
  skipIndex?: boolean
}

// Define the sections to include
const sections: DocSection[] = [
  {
    title: 'PRIMITIVE COMPONENTS',
    description: 'Basic UI components from @tidbcloud/uikit',
    basePath: path.join(DOCS_DIR, 'primitive'),
    importPath: '@tidbcloud/uikit',
    files: [], // Will be populated automatically
    skipIndex: true
  },
  {
    title: 'BUSINESS COMPONENTS',
    description: 'Higher-level business components from @tidbcloud/uikit/biz',
    basePath: path.join(DOCS_DIR, 'biz'),
    importPath: '@tidbcloud/uikit/biz',
    files: [], // Will be populated automatically
    skipIndex: true
  },
  {
    title: 'HOOKS',
    description: 'React hooks from @tidbcloud/uikit',
    basePath: path.join(DOCS_DIR, 'hooks'),
    importPath: '@tidbcloud/uikit',
    files: [], // Will be populated automatically
    skipIndex: true
  },
  {
    title: 'ICONS',
    description: 'Icon components from @tidbcloud/uikit/icons',
    basePath: path.join(DOCS_DIR, 'icons'),
    importPath: '@tidbcloud/uikit/icons',
    files: [], // Will be populated automatically
    skipIndex: false // Keep index.mdx for icons as it's the main doc
  }
]

// Populate files for each section
function populateSectionFiles() {
  for (const section of sections) {
    if (!fs.existsSync(section.basePath)) {
      console.warn(`Warning: Directory not found: ${section.basePath}`)
      continue
    }

    const files = fs
      .readdirSync(section.basePath)
      .filter((f) => {
        if (!f.endsWith('.mdx') || f.startsWith('_')) return false
        if (section.skipIndex && f === 'index.mdx') return false
        return true
      })
      .sort()

    section.files = files
  }
}

// Extract component/hook name from filename
function extractName(filename: string): string {
  return filename.replace('.mdx', '')
}

// Extract the first paragraph as description from MDX content
function extractDescription(content: string): string {
  // Skip the title line and find first paragraph
  const lines = content.split('\n')
  let inCodeBlock = false
  let description = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Skip code blocks
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    // Skip title
    if (line.startsWith('# ')) continue

    // Skip empty lines
    if (!line.trim()) continue

    // Skip import statements in MDX
    if (line.startsWith('import ')) continue

    // Skip headings
    if (line.startsWith('#')) break

    // Found first paragraph
    description = line.trim()
    break
  }

  return description
}

// Clean MDX content for llms.txt
function cleanMdxContent(content: string, componentName: string): string {
  let cleaned = content

  // Remove MDX import statements
  cleaned = cleaned.replace(/^import\s+.*$/gm, '')

  // Remove MDX component usage like <Link>, <Callout>, etc.
  cleaned = cleaned.replace(/<Link[^>]*>([^<]*)<\/Link>/g, '$1')
  cleaned = cleaned.replace(/<Callout[^>]*>([\s\S]*?)<\/Callout>/g, '\n> $1\n')

  // Remove empty code blocks (```tsx\n\n```)
  cleaned = cleaned.replace(/```tsx\s*\n\s*```/g, '')
  cleaned = cleaned.replace(/```ts\s*\n\s*```/g, '')
  cleaned = cleaned.replace(/```js\s*\n\s*```/g, '')

  // Remove the Import section with empty code block
  cleaned = cleaned.replace(/## Import\s*\n+```tsx\s*\n```\s*\n/g, '')

  // Remove empty Import sections
  cleaned = cleaned.replace(/## Import\s*\n+(?=##|\n\n)/g, '')

  // Remove the title line (we already have it in the header)
  cleaned = cleaned.replace(/^# .+\n+/, '')

  // Clean up multiple empty lines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  // Trim leading/trailing whitespace
  cleaned = cleaned.trim()

  return cleaned
}

// Process a single MDX file
function processMdxFile(filePath: string, importPath: string): string {
  const content = fs.readFileSync(filePath, 'utf-8')
  const filename = path.basename(filePath)
  let name = extractName(filename)
  const description = extractDescription(content)
  const cleanedContent = cleanMdxContent(content, name)

  // Handle index files specially
  if (name === 'index') {
    // Try to extract the actual title from the content
    const titleMatch = content.match(/^# (.+)$/m)
    if (titleMatch) {
      name = titleMatch[1].replace(/\s+/g, '')
    } else {
      name = 'Overview'
    }
  }

  // Determine if it's a hook or component
  const isHook = name.startsWith('use')

  let output = ''
  output += `### ${name}\n`
  output += `Package: ${importPath}\n`

  if (isHook) {
    output += `Import: import { ${name} } from '${importPath}';\n`
  } else if (name !== 'Overview' && name !== 'Icons') {
    output += `Import: import { ${name} } from '${importPath}';\n`
  }

  if (description) {
    output += `Description: ${description}\n`
  }

  output += '\n'
  output += cleanedContent
  output += '\n'

  return output
}

// Generate the header for llms.txt
function generateHeader(): string {
  return `# TiDB Cloud UIKit - Complete Documentation

This file contains comprehensive documentation for the TiDB Cloud UIKit library including:
- Complete component documentation with usage examples
- Business components for common patterns
- React hooks documentation
- Icon library reference

All code examples use production npm package imports:
- @tidbcloud/uikit - Core components and hooks
- @tidbcloud/uikit/biz - Business components
- @tidbcloud/uikit/icons - Icon components

================================================================================
`
}

// Generate section content
function generateSection(section: DocSection): string {
  if (section.files.length === 0) {
    return ''
  }

  let output = ''
  output += `\n## ${section.title}\n`
  output += `${section.description}\n`
  output += `Primary Package: ${section.importPath}\n\n`
  output += '--------------------------------------------------------------------------------\n\n'

  for (const file of section.files) {
    const filePath = path.join(section.basePath, file)
    try {
      const fileContent = processMdxFile(filePath, section.importPath)
      output += fileContent
      output += '\n--------------------------------------------------------------------------------\n\n'
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error)
    }
  }

  return output
}

// Generate quick reference section
function generateQuickReference(): string {
  let output = '\n## QUICK REFERENCE\n\n'

  output += '### Import Examples\n\n'
  output += '```tsx\n'
  output += '// Core components\n'
  output += "import { Button, TextInput, Select, Modal, Table } from '@tidbcloud/uikit';\n\n"
  output += '// Business components\n'
  output += "import { Form, FormTextInput, ProTable, CodeBlock } from '@tidbcloud/uikit/biz';\n\n"
  output += '// Hooks\n'
  output += "import { useDisclosure, useClipboard, useLocalStorage } from '@tidbcloud/uikit';\n\n"
  output += '// Icons\n'
  output += "import { IconAlertCircle, IconCheck, IconX } from '@tidbcloud/uikit/icons';\n"
  output += '```\n\n'

  return output
}

// Main function
async function main() {
  console.log('Generating llms.txt...')

  // Populate files for each section
  populateSectionFiles()

  // Generate content
  let content = generateHeader()
  content += generateQuickReference()

  for (const section of sections) {
    console.log(`Processing section: ${section.title} (${section.files.length} files)`)
    content += generateSection(section)
  }

  // Add footer
  content += `
================================================================================

## Additional Resources

- GitHub Repository: https://github.com/tidbcloud/tidbcloud-uikit
- Based on Mantine UI: https://mantine.dev

This documentation is auto-generated from the source documentation files.
Last updated: ${new Date().toISOString().split('T')[0]}
`

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')

  console.log(`\nGenerated ${OUTPUT_FILE}`)
  console.log(`Total size: ${(content.length / 1024).toFixed(2)} KB`)
}

main().catch(console.error)
