import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Image } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Image>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Image> = {
  title: 'Primitive/Image',
  component: Image,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Image></Image>,
  args: {}
}
