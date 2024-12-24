import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

import create from '@changesets/write'
import { getPackages } from '@manypkg/get-packages'
import prompts from 'prompts'

async function main() {
  if (process.argv.includes('version')) {
    execSync('npx changeset version', { stdio: 'inherit' })
    return
  }

  // Get all packages
  const { packages } = await getPackages(process.cwd())

  // Fetch all tags first
  execSync('git fetch --all --tags')

  // Get commits since last tag with links
  const lastTag = execSync('git describe --tags --abbrev=0').toString().trim()
  const changelog = execSync(`git log ${lastTag}..HEAD --pretty=format:"- %s"`).toString()

  console.log('')
  console.log('Generated changelog:')
  console.log(changelog)
  console.log('')

  // Prompt for package selection
  const { selectedPackages } = (await prompts({
    type: 'multiselect',
    name: 'selectedPackages',
    message: 'Which packages would you like to include?',
    choices: packages.map((pkg) => ({ title: pkg.packageJson.name, value: pkg.packageJson.name }))
  })) as { selectedPackages: string[] }

  // Prompt for bump type
  const { bumpType } = await prompts({
    type: 'select',
    name: 'bumpType',
    message: 'What kind of change is this?',
    choices: [
      { title: 'major', value: 'major' },
      { title: 'minor', value: 'minor' },
      { title: 'patch', value: 'patch' }
    ]
  })

  // Create changeset
  await create(
    {
      summary: changelog,
      releases: selectedPackages.map((pkgName) => ({
        name: pkgName,
        type: bumpType
      }))
    },
    process.cwd()
  )
}

main().catch(console.error)
