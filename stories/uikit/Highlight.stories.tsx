import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Highlight } from '@tidbcloud/uikit'

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

function PrimaryDemo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] }
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
