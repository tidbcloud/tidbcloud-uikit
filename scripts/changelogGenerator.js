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
  getReleaseLine: async (changeset) => {
    // Just return the summary without bullet points
    return changeset.summary
  }
}
