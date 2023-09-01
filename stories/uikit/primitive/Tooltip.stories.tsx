import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Tooltip } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Tooltip>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Tooltip> = {
  title: 'Primitive/Tooltip',
  component: Tooltip,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => (
    <Tooltip {...props} label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  ),
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
