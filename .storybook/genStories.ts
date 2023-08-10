import fs from 'node:fs'
import { glob } from 'glob'
import ts from 'typescript'

function ensureFolderExist(folder: string) {
  try {
    fs.mkdirSync(folder)
  } catch (err) {}
}

const genereateStory = (comp: string, imported: string, compNamespace: string) => {
  const title = `${compNamespace}/${comp}`

  const template = `
import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MantineProvider, NotificationsProvider } from '@tidbcloud/uikit'
import { ${comp} } from '${imported}'
import { Theme, themeColors } from '@tidbcloud/uikit/theme'

type Story = StoryObj<typeof ${comp}>

const themeDecorator = (Story: StoryFn) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        ...Theme,
        colors: themeColors
      }}
    >
      <NotificationsProvider position="top-center">
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </NotificationsProvider>
    </MantineProvider>
  )
}

const meta: Meta<typeof ${comp}> = {
  title: '${title}',
  component: ${comp},
  decorators: [themeDecorator],
  parameters: {},
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (<${comp}></${comp}>),
  args: {}
}
`
  const outDir = `${process.cwd()}/stories/uikit`
  const filePath = `${outDir}/${comp}.stories.tsx`
  ensureFolderExist(outDir)

  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${title} already exists`)
    return
  }

  console.log(`Generating story for ${title}`)
  fs.writeFileSync(filePath, template, { encoding: 'utf8', flag: 'w' })
}

const resolveImportPath = (file: string) => {
  const defaultPath = '@tidbcloud/uikit'
  const paths: [RegExp, string, string?][] = [
    [/primitive/, 'primitive'],
    [/theme/, 'theme'],
    [/icons/, 'icons']
  ]
  for (const [regexp, name] of paths) {
    if (regexp.test(file)) {
      return [defaultPath, 'Primitive']
    }
  }
  return [`${defaultPath}/biz`, 'Biz']
}

const getAllPaths = () => {
  const targetFolders = ['primitive', 'biz']

  targetFolders.forEach((folder) => {
    const targetEntry = `${process.cwd()}/packages/uikit/src/${folder}/index.ts`
    const rootNames = glob.sync(`${process.cwd()}/packages/uikit/src/${folder}/**/*.{ts,tsx}`)
    const program = ts.createProgram({
      rootNames,
      options: { allowJs: true, esModuleInterop: true, allowSyntheticDefaultImports: true }
    })

    const checker = program.getTypeChecker()
    const sourceFile = program.getSourceFile(targetEntry)
    if (!sourceFile) {
      return
    }
    let symbol = checker.getSymbolAtLocation(sourceFile)
    if (!symbol) {
      return
    }

    const isReactComponent = (s: ts.Symbol) => {
      const type = checker.getTypeOfSymbolAtLocation(s, sourceFile)
      const typeString = checker.typeToString(type)
      const properties = type.getProperties()
      const names = ['defaultProps', 'propTypes', 'displayName']
      const hasReactProperties = properties.some((prop) => names.includes(prop.escapedName!))
      const isFunctionalComponent = typeString.includes('FC<')
      return (hasReactProperties || isFunctionalComponent) && !typeString.endsWith('Provider')
    }

    const symbols = checker.getExportsOfModule(symbol)
    console.log(`Found ${symbols.length} symbols in ${folder}`)
    const componentSymbols = symbols.filter((i) => isReactComponent(i))

    console.log(`Found ${componentSymbols.length} components in ${folder} should have story`)
    componentSymbols.forEach((symbol) => {
      const [importedPath, compNamespace] = resolveImportPath(targetEntry)
      genereateStory(symbol.escapedName!, importedPath, compNamespace)
    })
  })
}

getAllPaths()
