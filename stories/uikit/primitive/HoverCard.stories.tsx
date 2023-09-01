import type { Meta, StoryObj, StoryFn, ArgTypes } from '@storybook/react'
import { Button, Group, HoverCard, HoverCardProps } from '@tidbcloud/uikit'

type Story = StoryObj<typeof HoverCard>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof HoverCard> = {
  title: 'Primitive/HoverCard',
  component: HoverCard,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...props }) {
  return (
    <Group position="center">
      <HoverCard width={280} shadow="md" {...props}>
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both
          target and dropdown elements
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: PrimaryDemo,
  args: {
    withArrow: false
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
    }
  }
}
