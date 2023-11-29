import type { Meta, StoryObj } from '@storybook/react'
import { Tree, TreeDataNode } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof Tree>

const meta: Meta<typeof Tree> = {
  title: 'Biz/Tree',
  component: Tree,
  tags: ['autodocs'],
  parameters: {}
}

export default meta

function getTreeData(): TreeDataNode[] {
  return [
    {
      key: '0',
      title: 'node 0',
      children: [
        { key: '0-0', title: 'node 0-0' },
        { key: '0-1', title: 'node 0-1', disableCheckbox: true },
        {
          key: '0-2',
          title: 'node 0-2',
          children: [
            { key: '0-2-0', title: 'node 0-2-0' },
            { key: '0-2-1', title: 'node 0-2-1' },
            { key: '0-2-2', title: 'node 0-2-2' }
          ]
        },
        { key: '0-3', title: 'node 0-3' },
        { key: '0-4', title: 'node 0-4' },
        { key: '0-5', title: 'node 0-5' },
        { key: '0-6', title: 'node 0-6' },
        { key: '0-7', title: 'node 0-7' },
        { key: '0-8', title: 'node 0-8' },
        {
          key: '0-9',
          title: 'node 0-9',
          children: [
            { key: '0-9-0', title: 'node 0-9-0' },
            {
              key: '0-9-1',
              title: 'node 0-9-1',
              children: [
                { key: '0-9-1-0', title: 'node 0-9-1-0' },
                { key: '0-9-1-1', title: 'node 0-9-1-1' },
                { key: '0-9-1-2', title: 'node 0-9-1-2' },
                { key: '0-9-1-3', title: 'node 0-9-1-3' },
                { key: '0-9-1-4', title: 'node 0-9-1-4' }
              ]
            },
            {
              key: '0-9-2',
              title: 'node 0-9-2',
              children: [
                { key: '0-9-2-0', title: 'node 0-9-2-0' },
                { key: '0-9-2-1', title: 'node 0-9-2-1' }
              ]
            }
          ]
        }
      ]
    },
    {
      key: '1',
      title: 'node 1',
      // children: new Array(1000)
      //   .fill(null)
      //   .map((_, index) => ({ title: `auto ${index}`, key: `auto-${index}` })),
      children: [
        {
          key: '1-0',
          title: 'node 1-0',
          children: [
            { key: '1-0-0', title: 'node 1-0-0' },
            {
              key: '1-0-1',
              title: 'node 1-0-1',
              children: [
                { key: '1-0-1-0', title: 'node 1-0-1-0' },
                { key: '1-0-1-1', title: 'node 1-0-1-1' }
              ]
            },
            { key: '1-0-2', title: 'node 1-0-2' }
          ]
        }
      ]
    },
    {
      key: '3',
      title: 'node 3'
    }
  ]
}

function Demo() {
  return <Tree treeData={getTreeData()} checkable onCheck={(...args) => console.log(`checked:`, args)} />
}

const code = `
import { Tree, TreeDataNode } from '@tidbcloud/uikit/biz'

function getTreeData(): TreeDataNode[] {
  return [
    {
      key: '0',
      title: 'node 0',
      children: [
        { key: '0-0', title: 'node 0-0' },
        { key: '0-1', title: 'node 0-1',  disableCheckbox: true },
        {
          key: '0-2',
          title: 'node 0-2',
          children: [
            { key: '0-2-0', title: 'node 0-2-0' },
            { key: '0-2-1', title: 'node 0-2-1' },
            { key: '0-2-2', title: 'node 0-2-2' }
          ]
        },
        { key: '0-3', title: 'node 0-3' },
        { key: '0-4', title: 'node 0-4' },
        { key: '0-5', title: 'node 0-5' },
        { key: '0-6', title: 'node 0-6' },
        { key: '0-7', title: 'node 0-7' },
        { key: '0-8', title: 'node 0-8' },
        {
          key: '0-9',
          title: 'node 0-9',
          children: [
            { key: '0-9-0', title: 'node 0-9-0' },
            {
              key: '0-9-1',
              title: 'node 0-9-1',
              children: [
                { key: '0-9-1-0', title: 'node 0-9-1-0' },
                { key: '0-9-1-1', title: 'node 0-9-1-1' },
                { key: '0-9-1-2', title: 'node 0-9-1-2' },
                { key: '0-9-1-3', title: 'node 0-9-1-3' },
                { key: '0-9-1-4', title: 'node 0-9-1-4' }
              ]
            },
            {
              key: '0-9-2',
              title: 'node 0-9-2',
              children: [
                { key: '0-9-2-0', title: 'node 0-9-2-0' },
                { key: '0-9-2-1', title: 'node 0-9-2-1' }
              ]
            }
          ]
        }
      ]
    },
    {
      key: '1',
      title: 'node 1',
      children: [
        {
          key: '1-0',
          title: 'node 1-0',
          children: [
            { key: '1-0-0', title: 'node 1-0-0' },
            {
              key: '1-0-1',
              title: 'node 1-0-1',
              children: [
                { key: '1-0-1-0', title: 'node 1-0-1-0' },
                { key: '1-0-1-1', title: 'node 1-0-1-1' }
              ]
            },
            { key: '1-0-2', title: 'node 1-0-2' }
          ]
        }
      ]
    },
    {
      key: '3',
      title: 'node 3'
    }
  ]
}

function Demo() {
  return <Tree treeData={getTreeData()} checkable onCheck={(...args) => console.log(\`checked:\`, args)} />
}
`

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: () => <Demo />,
  args: {
    children: <Demo />
  }
}
