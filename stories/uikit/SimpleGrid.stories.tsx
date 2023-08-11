import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { SimpleGrid } from '@tidbcloud/uikit'

type Story = StoryObj<typeof SimpleGrid>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof SimpleGrid> = {
  title: 'Primitive/SimpleGrid',
  component: SimpleGrid,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <SimpleGrid></SimpleGrid>,
  args: {}
}
