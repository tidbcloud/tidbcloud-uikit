import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Text, Mark } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Mark>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Mark> = {
  title: 'Primitive/Mark',
  component: Mark,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...rest }) {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark {...rest}>Mantine</Mark>, you are awesome!
    </Text>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <PrimaryDemo {...rest} />,
  args: {},
  argTypes: {
    color: {
      options: [
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'teal'
      ],
      control: { type: 'select' }
    }
  }
}
