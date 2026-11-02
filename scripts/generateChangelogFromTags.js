const { execFileSync } = require('node:child_process')

const packageJson = require('../package.json')

function generateChangelogFromTags() {
  execFileSync('git', ['fetch', '--all', '--tags'])
  const lastTag = execFileSync('git', ['describe', '--tags', '--abbrev=0'], { encoding: 'utf8' }).trim()
  const repoUrl = packageJson.repository.url.replace(/\.git$/, '')
  const changelog = execFileSync('git', ['log', '--pretty=format:- %s', `refs/tags/${lastTag}..HEAD`, '--'], {
    encoding: 'utf8'
  })

  return changelog.replace(/#([0-9]+)/g, (_, number) => `[#${number}](${repoUrl}/pull/${number})`)
}

module.exports = generateChangelogFromTags
