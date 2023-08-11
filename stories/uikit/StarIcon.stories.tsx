import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { StarIcon } from '@tidbcloud/uikit'

type Story = StoryObj<typeof StarIcon>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof StarIcon> = {
  title: 'Primitive/StarIcon',
  component: StarIcon,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <StarIcon></StarIcon>,
  args: {}
}
