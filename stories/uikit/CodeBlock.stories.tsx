import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CodeBlock } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof CodeBlock>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CodeBlock> = {
  title: 'Biz/CodeBlock',
  component: CodeBlock,
  decorators: [decorator],
  parameters: {}
}

export default meta

const code = `
import { CodeBlock } from '@tidbcloud/uikit';

function Demo() {
  return <CodeBlock>Put some real code here</CodeBlock>
}
`

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <CodeBlock>{code}</CodeBlock>,
  args: {}
}
