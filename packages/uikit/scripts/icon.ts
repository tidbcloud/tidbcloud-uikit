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

import { transform, Config } from '@svgr/core'
import { camelCase, upperFirst } from 'lodash-es'
import ora, { Ora } from 'ora'

const withForceFlag = argv.includes('--force')
const rawIconInputPath = path.resolve(process.cwd(), './src/icons/raw')
const reactIconOutput = path.resolve(process.cwd(), './src/icons/react')
const indexOutput = path.join('./src/icons/index.ts')

async function getIconList(): Promise<string[]> {
  const files = await fs.readdir(rawIconInputPath)
  return files.filter((i) => path.extname(i) === '.svg').sort()
}

function pascalCase(filename: string) {
  return upperFirst(camelCase(path.basename(filename, '.svg')))
}

async function prepare() {
  const icons = await getIconList()
  for (const i of icons) {
    const name = pascalCase(i)
    if (!i.startsWith(name)) {
      const iconPath = path.resolve(rawIconInputPath, i)
      const content = await fs.readFile(iconPath, 'utf-8')
      await fs.unlink(iconPath)
      await fs.writeFile(path.resolve(rawIconInputPath, `${name}.svg`), content)
    }
  }
  return icons.length
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

async function transformSvgToJSX(content: string, name: string): Promise<string> {
  const jsCode = await transform(
    content,
    {
      plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      icon: true,
      ref: true,
      replaceAttrValues: {
        '#000': 'currentColor',
        black: 'currentColor'
      },
      jsx: {
        babelConfig: {
          plugins: [
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
                attributes: [{ name: 'strokeWidth', value: '2' }]
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
          ]
        }
      },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                convertPathData: false,
                removeViewBox: false // 确保保留 viewBox
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
  const icons = await getIconList()
  const total = icons.length
  const chunkSize = 100

  for (let i = 0; i < icons.length; i += chunkSize) {
    const chunk = icons.slice(i, i + chunkSize)

    await Promise.all(
      chunk.map(async (icon) => {
        const name = pascalCase(icon)
        const iconPath = path.resolve(rawIconInputPath, icon)
        const content = await fs.readFile(iconPath, 'utf-8')
        const output = path.resolve(reactIconOutput, `${name}.jsx`)
        const isExist = await fs.stat(output).catch(() => false)

        // only do the transformation if the file not transformed yet or with force flag
        if (!isExist || withForceFlag) {
          const jsCode = await transformSvgToJSX(content, name)
          await fs.writeFile(output, jsCode)
        }
      })
    )

    // Update progress after each chunk
    spinner.text = `transformed icons: ${Math.min(i + chunkSize, total)}/${total}`
  }
}

const noEdit = `/**
 * DO NOT EDIT THIS FILE, THE CONTENT IS AUTO-GENERATED
 * RUN \`pnpm run build:icon\` TO RE-GENERATE
 */
/* eslint-disable */
`

async function updateImportEntry() {
  const icons = await getIconList()
  const typeImports = [`import type { SVGProps } from 'react'`, `import type { BoxProps } from '@mantine/core'`].join(
    '\n'
  )

  const iconImports = icons
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
    icons.map(async (i) => {
      const name = pascalCase(i)
      const iconName = pascalCase('Icon' + name)
      const svgContent = await fs.readFile(path.resolve(rawIconInputPath, i), 'utf-8')
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
  const encoded = Buffer.from(svgString).toString('base64')
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
