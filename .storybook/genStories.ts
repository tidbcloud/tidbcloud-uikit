import { glob } from 'glob'
import fs from 'node:fs/promises'
import path from 'path'
import ts from 'typescript'

const getPropsTypes = (properties: ts.Symbol[], checker: ts.TypeChecker, symbol: ts.Symbol) => {
  properties.forEach((prop) => {
    if (prop.escapedName === 'propTypes' && symbol.declarations?.[0]) {
      const propType = checker.getTypeOfSymbolAtLocation(prop, symbol.declarations[0])
      // console.log(
      checker
        .getPropertiesOfType(propType)
        .filter((p) => {})
        .map((t) => t.escapedName)
      // )
    }
  })
}

const isJSXElment = (properties: ts.Symbol[]) => {
  const names = ['defaultProps', 'propTypes', 'displayName']
  return properties.some((prop) => {
    return names.includes(prop.escapedName!)
  })
}

const genereateStory = async (comp: string, imported: string) => {
  const template = `
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ${comp} } from '${imported}'

const meta: Meta<typeof ${comp}> = {
  title: 'Biz/Form',
  component: ${comp},
  parameters: {}
}

export default meta

type Story = StoryObj<typeof ${comp}>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary${comp}: Story = {
  render: () => (<${comp}></${comp}>),
  args: {}
}
`
  const filePath = `${process.cwd()}/stories/uikit/${comp}.stories.tsx`
  fs.stat(filePath).catch((e) => {
    // only write when file does not exist
    if (e.code === 'ENOENT') {
      fs.writeFile(filePath, template)
    }
  })
}

const resolveImportPath = (file: string) => {
  const defaultPath = '@tidbcloud/uikit'
  const paths: [RegExp, string][] = [
    [/theme/, 'theme'],
    [/icons/, 'icons']
  ]
  for (let i = 0; i < paths.length; i++) {
    const [regexp, name] = paths[i]
    if (regexp.test(file)) {
      return `${defaultPath}/${name}`
    }
  }

  return defaultPath
}

const getAllPaths = async () => {
  const paths = glob.sync(`${process.cwd()}/packages/uikit/src/**/index.{ts,tsx}`, {
    ignore: ['**/utils/**', '**/theme/**', '**/hooks/**']
  })

  const program = ts.createProgram({
    rootNames: paths,
    options: { allowJs: true, esModuleInterop: true, allowSyntheticDefaultImports: true }
  })

  paths.map((file) => {
    const checker = program.getTypeChecker()
    const sourceFile = program.getSourceFile(file)
    if (!sourceFile) {
      return
    }
    let symbol = checker.getSymbolAtLocation(sourceFile)
    if (!symbol) {
      return
    }
    const symbols = checker.getExportsOfModule(symbol)
    symbols.forEach((symbol) => {
      const type = checker.getTypeOfSymbolAtLocation(symbol, sourceFile)
      const properties = type.getProperties()
      if (!isJSXElment(properties)) {
        return
      }
      genereateStory(symbol.escapedName!, resolveImportPath(file))
    })
  })
}

getAllPaths()
