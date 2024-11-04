import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Divider } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Divider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Divider> = {
  title: 'Primitive/Misc/Divider',
  component: Divider,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo></Demo>,
  args: {}
}
