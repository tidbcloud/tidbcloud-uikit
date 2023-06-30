<p align="center">
  <a href="https://tidbcloud.com" target="_blank"><img src="media/tidbcloud-logo.svg" width="256" alt="TiDB Cloud Logo" /></a>
</p>
<h1 align="center">TiDB Cloud UIKit</h1>

This repo is hosted TiDB Cloud UIKit including primitive, biz and pro components

### Setup the repo

Before developing

1. Make sure you've installed the [pnpm](https://pnpm.io/)
2. Clone the project & install the depenceis
3. Enter the root folder, and use blow command

```shell

cd ./tidbcloud-uikit/
cp .npmrc.sample .npmrc

```

4. Go to Github > Settings > Personal access token -> [Tokens(classic)](https://github.com/settings/tokens)

   a. Generate a new token(classic)
   <img src="media/token.png" style="display: block;" />

   b. Give the token `read:packages`
   <img src="media/packages.png" style="display: block;" />

   c. Replace the symbol called `${NPM_TOKEN}` with your github token residing in `.npmrc`
   <img src="media/npmrc.png" style="display: block;" />

### Development

#### Tools

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Tsup](https://tsup.egoist.dev/) to bundle packages
- [Storybook](https://storybook.js.org/) for rapid UI component development and testing
- [Changeset](https://github.com/atlassian/changesets) for changes documentation, changelog generation, and release management.

#### Commands

`pnpm install`: bootstraps the entire project, symlinks all dependencies for cross-component development and builds all components.
`pnpm storybook`: starts storybook server and loads stories in files that end with .stories.tsx.
`pnpm build`: run build for all component packages.
`pnpm release`: publish changed packages.

#### Developing

Your working area is uikit and stories. Once you finish your coding in the uikit, please write some stories for testing.

### Making a pull request

#### Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.
When you create a commit, you should follow the convention category(scope or module): message in your commit message while using one of the following categories:

- feat/feature: all changes that introduce completely new code or new features
  - For example: feat(uikit/components), feat(uikit/hooks)
- fix: changes that fix a bug (ideally you will additionally reference an issue if present)
- refactor: any code related change that is not a fix nor a feature
- chore: all changes to the repository that do not fit into any of the above categories

### PR

Once you've committed your message. You can do your PR

1. Make a changeset

```shell
pnpm changeset
```

2. Follow the changeset interactive prompts, commit your change

```shell
git commit -m 'feat(uikit): your message'
```

3. Push the changes, request a PR. Waiting for the review and merged with the master
