import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { SimpleGrid, Box } from '@tidbcloud/uikit'

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
  render: () => (
    <SimpleGrid cols={3}>
      <Box bg="#EFEFEF">1</Box>
      <Box bg="#EFEFEF">2</Box>
      <Box bg="#EFEFEF">3</Box>
      <Box bg="#EFEFEF">4</Box>
      <Box bg="#EFEFEF">5</Box>
    </SimpleGrid>
  ),
  args: {}
}
