import * as fs from 'node:fs/promises'

// see https://github.com/shuding/nextra/issues/1403
async function tweakNextraPreflightCSS() {
  const filename = './node_modules/nextra-theme-docs/style.css'
  try {
    const data = await fs.readFile(filename, 'utf-8')
    if (data.includes('@layer nextra')) {
      return
    }
    const newContent = `@layer nextra {${data}};`

    await fs.writeFile(filename, newContent, 'utf-8')
  } catch (e) {
    console.log(e)
  }
}

tweakNextraPreflightCSS()
