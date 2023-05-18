import fs from 'node:fs'

import packageJson from '../package.json'

export function postbuild() {
  const exports = Object.keys(packageJson.exports).filter((i) => !['.', './package.json'].includes(i))

  exports.forEach((i) => {
    fs.writeFileSync(`${i}.js`, `module.exports = require("./dist/${i.replace('./', '')}");`)
    fs.writeFileSync(`${i}.d.ts`, `export * from "./dist/${i.replace('./', '')}"`)
  })
}

postbuild()
