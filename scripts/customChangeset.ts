import { execFileSync } from 'node:child_process'

import create from '@changesets/write'
import prompts from 'prompts'

import generateChangelogFromTags from './generateChangelogFromTags.js'

async function main() {
  if (process.argv.includes('version')) {
    execFileSync('npx', ['changeset', 'version'], { stdio: 'inherit' })
    return
  }

  // Prompt for package selection
  const { selectedPackages } = await prompts({
    type: 'select',
    name: 'selectedPackages',
    message: 'Which packages would you like to include?',
    choices: [{ title: '@tidbcloud/uikit', value: '@tidbcloud/uikit' }]
  })

  if (!selectedPackages) {
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
      releases: [
        {
          name: selectedPackages,
          type: bumpType
        }
      ]
    },
    process.cwd()
  )
}

main().catch(console.error)
