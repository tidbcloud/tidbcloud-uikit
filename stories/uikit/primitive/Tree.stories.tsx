import type { Meta, StoryFn } from '@storybook/react'
import { Group, Tree, type TreeNodeData } from '@tidbcloud/uikit'
import { IconFolder, IconFile02 } from '@tidbcloud/uikit/icons'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Tree> = {
  title: 'Primitive/Navigation/Tree',
  component: Tree,
  decorators: [decorator],
  parameters: {}
}

export default meta

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' }
        ]
      }
    ]
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' }
        ]
      },
      {
        label: '@tidbcloud',
        value: 'node_modules/@tidbcloud',
        children: [
          {
            label: 'uikit',
            value: 'node_modules/@tidbcloud/uikit',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@tidbcloud/uikit/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@tidbcloud/uikit/package.json' }
            ]
          },
          {
            label: 'hooks',
            value: 'node_modules/@tidbcloud/uikit/hooks',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@tidbcloud/uikit/hooks/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@tidbcloud/uikit/hooks/package.json' }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'package.json',
    value: 'package.json'
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json'
  }
]

export function Primary() {
  return (
    <Tree
      data={data}
      renderNode={({ node, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          {hasChildren ? <IconFolder size={18} /> : <IconFile02 size={18} />}
          <span>{node.label}</span>
        </Group>
      )}
    />
  )
}
