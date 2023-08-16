import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stack, Button } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Stack>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Stack> = {
  title: 'Primitive/Stack',
  component: Stack,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Stack
      h={300}
      sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}
    >
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Stack>
  ),
  args: {}
}
