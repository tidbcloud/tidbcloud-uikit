/**
 * This script will scan all the svg icon in src/icons/raw folder
 * then generate correspondent react jsx code to src/icons/react folder
 *
 * It will:
 * - Rename all the svg file to PasCal case (or upper camel case)
 * - Use svgr to generate react jsx code
 * - Use a custom code template to support other props such as `size`
 * - By default, it will skip if there are already a jsx file with same name, unless you pass a `--force` flag
 *
 * Usage:
 * ```sh
 * npx tsx scripts/icon.ts
 * npx tsx scripts/icon.ts --force
 * ```
 */
import { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'
import path from 'node:path'
import { argv } from 'node:process'

import { Config, transform } from '@svgr/core'
import { camelCase, upperFirst } from 'lodash-es'
import ora, { Ora } from 'ora'

const withForceFlag = argv.includes('--force')
const rawIconInputPath = path.resolve(process.cwd(), './src/icons/raw')
const filledIconInputPath = path.resolve(process.cwd(), './src/icons/filled')
const reactIconOutput = path.resolve(process.cwd(), './src/icons/react')
const indexOutput = path.join('./src/icons/index.ts')

async function getIconList(): Promise<{ outline: string[]; filled: string[] }> {
  const files = await fs.readdir(rawIconInputPath)
  const svgFiles = files.filter((i) => path.extname(i) === '.svg').sort()

  const outline: string[] = []
  const filled: string[] = []

  for (const file of svgFiles) {
    if (file.toLowerCase().includes('fill')) {
      filled.push(file)
    } else {
      outline.push(file)
    }
  }

  // Also get existing filled icons
  try {
    const existingFilled = await fs.readdir(filledIconInputPath)
    const existingFilledSvg = existingFilled.filter((i) => path.extname(i) === '.svg').sort()
    filled.push(...existingFilledSvg)
  } catch {
    // filled folder doesn't exist yet, that's ok
  }

  return { outline, filled }
}

function pascalCase(filename: string) {
  return upperFirst(camelCase(path.basename(filename, '.svg')))
}

async function prepare() {
  const { outline, filled } = await getIconList()

  // Ensure filled directory exists
  await fs.mkdir(filledIconInputPath, { recursive: true })

  // Process outline icons
  for (const i of outline) {
    const name = pascalCase(i)
    if (!i.startsWith(name)) {
      const iconPath = path.resolve(rawIconInputPath, i)
      const content = await fs.readFile(iconPath, 'utf-8')
      await fs.unlink(iconPath)
      await fs.writeFile(path.resolve(rawIconInputPath, `${name}.svg`), content)
    }
  }

  // Process filled icons - move them to filled folder and rename
  for (const i of filled) {
    const name = pascalCase(i)
    const sourcePath = path.resolve(rawIconInputPath, i)
    const targetPath = path.resolve(filledIconInputPath, `${name}.svg`)

    try {
      const content = await fs.readFile(sourcePath, 'utf-8')
      await fs.writeFile(targetPath, content)
      // Remove from raw folder if it was there
      try {
        await fs.unlink(sourcePath)
      } catch {
        // File might not be in raw folder, that's ok
      }
    } catch {
      // File might already be in filled folder
    }
  }

  return outline.length + filled.length
}

const template: Config['template'] = (variables, { tpl }) => {
  const { componentName, props, jsx, imports } = variables
  const innerComponentName = 'Icon' + componentName
  return tpl`
import { Box as MantineBox } from '@mantine/core';
${imports}

const ${innerComponentName} = (${props}) => {
  return (
    ${jsx}
  )
};

const ForwardRef = forwardRef(${innerComponentName})

const ${componentName} = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props;
    props = { ...rest, w: size, h: size };
  }
  return (
    <MantineBox ref={ref} {...props} component={ForwardRef} className={['tiui-icon', '${componentName}', props.className].join(' ')} />
  )
})

${componentName}.displayName = '${innerComponentName}';

export default ${componentName};
`
}

async function transformSvgToJSX(content: string, name: string, isFilled = false): Promise<string> {
  const plugins = ['@svgr/plugin-jsx', '@svgr/plugin-prettier']

  const babelPlugins: any[] = []

  if (!isFilled) {
    // Only add strokeWidth plugins for outline icons
    babelPlugins.push(
      [
        '@svgr/babel-plugin-remove-jsx-attribute',
        {
          elements: ['path'],
          attributes: ['strokeWidth']
        },
        'remove strokeWidth on path tag'
      ],
      [
        '@svgr/babel-plugin-add-jsx-attribute',
        {
          elements: ['svg'],
          attributes: [{ name: 'strokeWidth', value: '1.5' }]
        },
        'add strokeWidth on svg tag'
      ],
      [
        '@svgr/babel-plugin-add-jsx-attribute',
        {
          elements: ['path'],
          attributes: [{ name: 'strokeWidth', value: 'inherit' }]
        },
        'add strokeWidth inherit on path tag'
      ],
      [
        '@svgr/babel-plugin-add-jsx-attribute',
        {
          elements: ['path'],
          attributes: [
            {
              name: 'stroke',
              value: 'currentColor'
            }
          ]
        }
      ]
    )
  }

  const jsCode = await transform(
    content,
    {
      plugins,
      icon: true,
      ref: true,
      replaceAttrValues: {
        '#000': 'currentColor',
        black: 'currentColor'
      },
      jsx: {
        babelConfig: {
          plugins: babelPlugins
        }
      },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                convertPathData: false,
                removeViewBox: false
              }
            }
          }
        ]
      },
      template
    },
    { componentName: name }
  )

  return jsCode
}

async function transformAllSvgIcon(spinner: Ora) {
  const { outline, filled } = await getIconList()
  const total = outline.length + filled.length
  const chunkSize = 100

  let processed = 0

  // Process outline icons
  for (let i = 0; i < outline.length; i += chunkSize) {
    const chunk = outline.slice(i, i + chunkSize)

    await Promise.all(
      chunk.map(async (icon) => {
        const name = pascalCase(icon)
        const iconPath = path.resolve(rawIconInputPath, icon)
        const content = await fs.readFile(iconPath, 'utf-8')
        const output = path.resolve(reactIconOutput, `${name}.jsx`)
        const isExist = await fs.stat(output).catch(() => false)

        if (!isExist || withForceFlag) {
          const jsCode = await transformSvgToJSX(content, name, false)
          await fs.writeFile(output, jsCode)
        }
      })
    )

    processed += chunk.length
    spinner.text = `transformed icons: ${processed}/${total}`
  }

  // Process filled icons
  for (let i = 0; i < filled.length; i += chunkSize) {
    const chunk = filled.slice(i, i + chunkSize)

    await Promise.all(
      chunk.map(async (icon) => {
        const name = pascalCase(icon)
        const iconPath = path.resolve(filledIconInputPath, icon)
        const content = await fs.readFile(iconPath, 'utf-8')
        const output = path.resolve(reactIconOutput, `${name}.jsx`)
        const isExist = await fs.stat(output).catch(() => false)

        if (!isExist || withForceFlag) {
          const jsCode = await transformSvgToJSX(content, name, true)
          await fs.writeFile(output, jsCode)
        }
      })
    )

    processed += chunk.length
    spinner.text = `transformed icons: ${processed}/${total}`
  }
}

const noEdit = `/**
 * DO NOT EDIT THIS FILE, THE CONTENT IS AUTO-GENERATED
 * RUN \`pnpm run build:icon\` TO RE-GENERATE
 */
/* eslint-disable */
`

async function updateImportEntry() {
  const { outline, filled } = await getIconList()
  const allIcons = [...outline, ...filled]

  const typeImports = [`import type { SVGProps } from 'react'`, `import type { BoxProps } from '@mantine/core'`].join(
    '\n'
  )

  const iconImports = allIcons
    .map((i) => {
      const name = pascalCase(i)
      return `import ${name} from './react/${name}.jsx'`
    })
    .join('\n')

  const iconPropsType = [
    `export interface IconProps extends Omit<SVGProps<SVGSVGElement>, keyof BoxProps>, BoxProps {`,
    `  size?: number`,
    `}`
  ].join('\n')

  const iconExportsWithType = await Promise.all(
    allIcons.map(async (i) => {
      const name = pascalCase(i)
      const iconName = pascalCase('Icon' + name)
      const isFilled = filled.includes(i)
      const iconPath = isFilled ? path.resolve(filledIconInputPath, i) : path.resolve(rawIconInputPath, i)
      const svgContent = await fs.readFile(iconPath, 'utf-8')
      return [
        generateIconDoc(svgToBase64(svgContent)),
        `export const ${iconName} = ${name} as React.FC<IconProps>\n`
      ].join('\n')
    })
  )

  await fs.writeFile(
    indexOutput,
    [noEdit, typeImports, `${iconImports}\n`, `${iconPropsType}\n`, iconExportsWithType.join('\n')].join('\n')
  )
}

function generateIconDoc(preview: string) {
  return [`/**`, ` * @preview ![img](${preview})`, ` */`].join('\n')
}

function svgToBase64(svgString: string): string {
  // Simple approach: wrap the original SVG in a new SVG with white background
  const wrappedSvg = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="white"/>
  <g>${svgString}</g>
</svg>`

  const encoded = Buffer.from(wrappedSvg).toString('base64')
  return `data:image/svg+xml;base64,${encoded}`
}

async function main() {
  const spinner = ora('preprocessing all raw icons...').start()
  const total = await prepare()
  spinner.succeed(`preprocessing completed, found ${total} icons`)
  try {
    spinner.start('transforming to react components...')
    await transformAllSvgIcon(spinner)
    spinner.succeed('transforming completed')

    spinner.start('updating import entry file...')
    await updateImportEntry()
    spinner.succeed('import entry updated')

    spinner.succeed('done')
  } catch (err) {
    spinner.fail('transforming failed')
    throw err
  }
}

main().catch(console.error)
