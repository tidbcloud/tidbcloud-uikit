import fs from 'node:fs/promises'
import path from 'node:path'

import { components } from '../.storybook/components.js'

const DOCS_DIR = 'packages/documentation/pages/docs/primitive'
const MDX_TEMPLATE = `import { EmbeddedStory } from '@components/EmbeddedStory'

<EmbeddedStory
  src={\`\${process.env.NEXT_PUBLIC_STORYBOOK_HOST}/iframe.html?args=&id=primitive-CATEGORY-COMPONENT--docs&viewMode=story&full=1&shortcuts=false&singleStory=true\`}
></EmbeddedStory>`

async function main() {
  // Clean directory
  try {
    await fs.rm(DOCS_DIR, { recursive: true })
    await fs.mkdir(DOCS_DIR, { recursive: true })
  } catch (err) {
    console.error('Error cleaning directory:', err)
    process.exit(1)
  }

  // Generate new MDX files
  for (const [category, componentList] of Object.entries(components.core)) {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-')

    // Create MDX file for each component directly under DOCS_DIR
    for (const component of componentList) {
      const mdxContent = MDX_TEMPLATE.replace('CATEGORY', categorySlug).replace('COMPONENT', component.toLowerCase())

      const filePath = path.join(DOCS_DIR, `${component}.mdx`)
      await fs.writeFile(filePath, mdxContent)
    }
  }

  console.log('MDX files generated successfully!')
}

main().catch(console.error)
