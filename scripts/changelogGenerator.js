const { execSync } = require('node:child_process')

const packageJson = require('../package.json')

function generateChangelogFromTags() {
  execSync('git fetch --all --tags')
  const lastTag = execSync('git describe --tags --abbrev=0').toString().trim()
  const repoUrl = packageJson.repository.url.replace(/\.git$/, '')
  const changelog = execSync(
    `git log ${lastTag}..HEAD --pretty=format:"- %s" | sed -E 's|#([0-9]+)|[#\\1](${repoUrl}/pull/\\1)|g'`
  ).toString()

  return changelog
}

module.exports = {
  getDependencyReleaseLine: async (changesets, dependenciesUpdated) => {
    if (dependenciesUpdated.length === 0) return ''

    const changesetLinks = changesets.map(
      (changeset) => `- Updated dependencies${changeset.commit ? ` [${changeset.commit.slice(0, 7)}]` : ''}`
    )

    const updatedDependenciesList = dependenciesUpdated.map(
      (dependency) => `  - ${dependency.name}@${dependency.newVersion}`
    )

    return [...changesetLinks, ...updatedDependenciesList].join('\n')
  },
  getReleaseLine: async () => {
    return generateChangelogFromTags()
  }
}
