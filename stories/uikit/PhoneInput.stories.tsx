import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { PhoneInput } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof PhoneInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof PhoneInput> = {
  title: 'Biz/PhoneInput',
  component: PhoneInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PhoneInput></PhoneInput>,
  args: {}
}
