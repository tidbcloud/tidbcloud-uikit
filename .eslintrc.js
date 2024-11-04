module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['file-extension-in-import-ts', 'import'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:storybook/recommended'],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  rules: {
    'file-extension-in-import-ts/file-extension-in-import-ts': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Please use lodash-es instead.'
          }
        ]
      }
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportAllDeclaration[exportKind!="type"][source.value!=/^[\\.]/]',
        message:
          'export * is only allowed from relative paths or for types (export type *). Use named exports for third-party libraries.'
      }
    ]
  }
}
