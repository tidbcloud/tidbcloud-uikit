import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Text } from '@tidbcloud/uikit'
import { Popover } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Popover>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Popover> = {
  title: 'Primitive/Popover',
  component: Popover,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...props }) {
  return (
    <Popover width={200} shadow="md" {...props}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: PrimaryDemo,
  args: {
    position: 'bottom',
    offset: 5,
    withArrow: true,
    arrowPosition: 'side'
  },
  argTypes: {
    withArrow: {
      control: 'boolean'
    },
    position: {
      control: 'select',
      options: [
        'bottom',
        'left',
        'right',
        'top',
        'bottom-end',
        'bottom-start',
        'left-end',
        'left-start',
        'right-end',
        'right-start',
        'top-end',
        'top-start'
      ]
    },
    arrowPosition: {
      control: 'select',
      options: ['center', 'side']
    },
    offset: {
      control: 'number'
    }
  }
}
