module.exports = {
  // See https://github.com/tidbcloud/dbaas-ui#security
  '*': 'git secrets --scan',
  '*.{js,mjs,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  '*.+(json|css|md|less)': ['prettier --write']
}
