import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Footer } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Footer>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Footer> = {
  title: 'Primitive/Footer',
  component: Footer,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Footer></Footer>,
  args: {}
}
