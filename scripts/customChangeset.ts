import { execSync } from 'node:child_process'

import create from '@changesets/write'
import { getPackages } from '@manypkg/get-packages'
import prompts from 'prompts'

import packageJson from '../package.json'

function generateChangelogFromTags() {
  execSync('git fetch --all --tags')
  const lastTag = execSync('git describe --tags --abbrev=0').toString().trim()
  const repoUrl = packageJson.repository.url.replace(/\.git$/, '')
  const changelog = execSync(
    `git log ${lastTag}..HEAD --pretty=format:"- %s" | sed -E 's|#([0-9]+)|[#\\1](${repoUrl}/pull/\\1)|g'`
  ).toString()

  return changelog
}

async function main() {
  if (process.argv.includes('version')) {
    execSync('npx changeset version', { stdio: 'inherit' })
    return
  }

  // Get all packages
  const { packages } = await getPackages(process.cwd())

  // Prompt for package selection
  const { selectedPackages } = (await prompts({
    type: 'multiselect',
    name: 'selectedPackages',
    message: 'Which packages would you like to include?',
    choices: packages.map((pkg) => ({ title: pkg.packageJson.name, value: pkg.packageJson.name })),
    min: 1
  })) as { selectedPackages: string[] }

  if (!selectedPackages || selectedPackages.length === 0) {
    console.log('Cancelled...')
    return
  }

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

  if (!bumpType) {
    console.log('Cancelled...')
    return
  }

  // Create changeset
  await create(
    {
      summary: generateChangelogFromTags(),
      releases: selectedPackages.map((pkgName) => ({
        name: pkgName,
        type: bumpType
      }))
    },
    process.cwd()
  )
}

main().catch(console.error)
