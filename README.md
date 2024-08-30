<p align="center">
  <a href="https://tidbcloud.com" target="_blank"><img src="media/tidbcloud-logo.svg" width="256" alt="TiDB Cloud Logo" /></a>
</p>
<h1 align="center">TiUI</h1>

This repo hosts TiUI (TiDB Cloud UIKit), including primitive, business, and pro components.

## Table of Contents

- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- ⚙️ [Setup the repo](#setup-the-repo)
- 🛠️ [Development](#development)
- ✍️ [Make a pull request](#making-a-pull-request)
- 🚀 [Release](#release)

## How to use

### Installation

```bash
npm i @tidbcloud/uikit
pnpm add @tidbcloud/uikit
yarn add @tidbcloud/uikit
```

### Usage

To start using the components, you just need to:

```typescript
import { Button } from '@tidbcloud/uikit'
```

### Development

#### Tools

- [Node.js v20](https://nodejs.org/)
- [pnpm v8](https://pnpm.io/) to manage packages and dependencies
- [storybook](https://storybook.js.org/) for rapid UI component development and testing
- [changeset](https://github.com/atlassian/changesets) for changes documentation, changelog generation, and release management.

#### Commands

- `pnpm install`: bootstraps the entire project, symlinks all dependencies for cross-component development and builds all components.
- `pnpm build`: run build for all component packages.
- `pnpm release`: publish changed packages.
- `pnpm storybook`: starts storybook server and loads stories in files that end with .stories.tsx.

#### Developing

Run `pnpm i && pnpm build && pnpm storybook` to start the project in development mode.

Your working area is uikit and stories. Once you finish your coding in the uikit, please write some stories for testing.

##### Developing documentation

After installing dependencies with `pnpm install`, cd to `packages/documentation`, create a .env file with following content:

```
NEXT_PUBLIC_STORYBOOK_HOST=https://story.tiui.tidbcloud.com

# if you want to reference your local storybook, set to
# NEXT_PUBLIC_STORYBOOK_HOST=http://localhost:6006
```

then run `pnpm dev` to start the local dev server for documentation.

### Making a pull request

#### Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.
When you create a commit, you should follow the convention category(scope or module): message in your commit message while using one of the following categories:

- feat/feature: all changes that introduce completely new code or new features
  - For example: feat(uikit/components), feat(uikit/hooks)
- fix: changes that fix a bug (ideally you will additionally reference an issue if present)
- refactor: any code related change that is not a fix nor a feature
- chore: all changes to the repository that do not fit into any of the above categories

### Pull Request

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

### Prerelease

If you want to release a prerelease version, make sure you are in prerelease mode

```bash
pnpm changeset pre enter beta
```

Then you can bump version with

```bash
pnpm changeset
pnpm changeset version
```
