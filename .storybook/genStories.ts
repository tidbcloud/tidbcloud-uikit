import { glob } from 'glob'
import fs from 'node:fs/promises'
import path from 'path'
import ts, { couldStartTrivia } from 'typescript'

const getProperties = (checker: ts.TypeChecker, symbol: ts.Symbol) => {
  const defaultExportType = checker.getTypeOfSymbolAtLocation(symbol, symbol.declarations![0])
  const properties = defaultExportType.getProperties()
  return properties
}

const isJSXElment = (properties: ts.Symbol[]) => {
  const names = ['defaultProps', 'propTypes', 'displayName']
  return properties.some((property) => names.includes(property.escapedName!))
}

const genereateStory = async (comp: string) => {
  const template = `
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ${comp} } from '@tidbcloud/uikit'

const meta: Meta<typeof ${comp}> = {
  title: 'Biz/Form',
  component: ${comp},
  parameters: {
  }
}

export default meta

type Story = StoryObj<typeof ${comp}>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ControlledForm: Story = {
  args: {
    children: (
      <div>
        <${comp} />
      </div>
    )
  }
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

const getAllPaths = async () => {
  const paths = glob.sync(`${process.cwd()}/packages/uikit/src/components/index.ts`, {
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
      // @ts-ignore
      if (!isJSXElment(properties)) {
        return
      }
      genereateStory(symbol.escapedName!)
    })
  })
}

getAllPaths()
