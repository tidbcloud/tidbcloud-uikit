import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Blockquote } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Blockquote>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Blockquote> = {
  title: 'Primitive/Typography/Blockquote',
  component: Blockquote,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ cite, color, children }) => (
    <Blockquote cite={cite} color={color}>
      {children}
    </Blockquote>
  ),
  args: {
    cite: '– Forrest Gump',
    color: 'gray',
    children: 'Life is like an npm install – you never know what you are going to get.'
  },
  argTypes: {
    color: {
      control: 'text'
    },
    cite: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  }
}
