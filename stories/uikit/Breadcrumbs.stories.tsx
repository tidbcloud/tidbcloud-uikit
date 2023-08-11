import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Breadcrumbs } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Breadcrumbs>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Primitive/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Breadcrumbs></Breadcrumbs>,
  args: {}
}
