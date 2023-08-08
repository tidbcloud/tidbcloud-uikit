<p align="center">
  <a href="https://tidbcloud.com" target="_blank"><img src="media/tidbcloud-logo.svg" width="256" alt="TiDB Cloud Logo" /></a>
</p>
<h1 align="center">TiDB Cloud UIKit</h1>

This repo is hosted TiDB Cloud UIKit including primitive, biz and pro components

## Table of Contents

- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- ⚙️ [Setup the repo](#setup-the-repo)
- 🛠️ [Development](#development)
- ✍️ [Make a pull request](#making-a-pull-request)
- 🚀 [Release](#release)

## How to use

### Installation

TiDBCloud UIKit was published to github registry as a private package, so you will need to setup that first:

1. Change your registry. Paste following code into your `$HOME/.npmrc`, replace `${NPM_TOKEN}` with the token you get from github.

```bash
@tidbcloud:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

If you want to know how to generate the token, follow the [Setup the repo](#setup-the-repo)

2. Install `@tidbcloud/uikit`

```bash
yarn add @tidbcloud/uikit

# or

npm i @tidbcloud/uikit
```

### Usage

To start using the components, you just need to:

```typescript
import { Card } from '@tidbcloud/uikit'
```

## Contributing

### Setup the repo

Before developing

1. Make sure you've installed the [pnpm](https://pnpm.io/)
2. Clone the project & install the depenceis
3. Enter the root folder, and use below command

```bash

cd ./tidbcloud-uikit/
cp .npmrc.sample .npmrc

```

4. Go to Github > Settings > Personal access token -> [Tokens(classic)](https://github.com/settings/tokens)

   a. Generate a new token(classic).
   <div>
      <img src="media/token.png" style="display: block;" />
   </div>

   b. Give the token `read:packages`.
   <div>
     <img src="media/packages.png" style="display: block;" />
   </div>

   c. Replace the symbol called `${NPM_TOKEN}` with your github token residing in `.npmrc`.
   <div>
     <img src="media/npmrc.png" style="display: block;" />
   </div>

### Development

#### Tools

- [pnpm](https://pnpm.io/) to manage packages and dependencies
- [tsup](https://tsup.egoist.dev/) to bundle packages
- [storybook](https://storybook.js.org/) for rapid UI component development and testing
- [changeset](https://github.com/atlassian/changesets) for changes documentation, changelog generation, and release management.

#### Commands

- `pnpm install`: bootstraps the entire project, symlinks all dependencies for cross-component development and builds all components.
- `pnpm storybook`: starts storybook server and loads stories in files that end with .stories.tsx.
- `pnpm build`: run build for all component packages.
- `pnpm release`: publish changed packages.

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

```bash
pnpm changeset
```

2. Follow the changeset interactive prompts, commit your change

```bash
git commit -m 'feat(uikit): your message'
```

3. Push the changes, request a PR. Waiting for the review and merged with the master

### Release

- Checkout from the latest master branch.
- Run `pnpm changeset` and follow the instructions, you will need to tell it the version and changelogs.
- Commit the generated changeset file (a markfown file in `.changeset` folder), create a pull request to master branch.
- After your pull request is merged, a new pull request will be created by a bot, you can review your release there.
- After that pull request is merged, a new release will be published automatically to github registry.
