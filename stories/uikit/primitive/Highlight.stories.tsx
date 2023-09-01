import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Highlight, HighlightProps } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Highlight>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Highlight> = {
  title: 'Primitive/Highlight',
  component: Highlight,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ color, highlight, children }: HighlightProps) => (
    <Highlight
      highlightColor={color}
      highlight={highlight}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] }
      })}
    >
      {children}
    </Highlight>
  ),
  args: {
    highlight: 'this',
    children: 'Highlight This, definitely THIS and also this!'
  },
  argTypes: {
    color: {
      control: 'text'
    },
    highlight: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  }
}
