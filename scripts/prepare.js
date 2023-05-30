const isCI = require('is-ci')

if (!isCI) {
  try {
    require('husky').install()
  } catch (e) {}
} else {
  console.log('Skip prepare in a CI server')
}
