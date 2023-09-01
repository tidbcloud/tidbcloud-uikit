import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Progress, Stack } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Progress>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Progress> = {
  title: 'Primitive/Progress',
  component: Progress,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Stack>
      <div>with value</div>
      <Progress value={50} />

      <div>multiple sections</div>
      <Progress
        size="xl"
        sections={[
          { value: 40, color: 'cyan' },
          { value: 20, color: 'blue' },
          { value: 15, color: 'indigo' }
        ]}
      />

      <div>multiple sections</div>
      <Progress
        radius="xl"
        size="xl"
        sections={[
          { value: 33, color: 'pink', label: 'Documents', tooltip: 'Document – 33 Gb' },
          { value: 28, color: 'grape', label: 'Apps', tooltip: 'Apps – 28 Gb' },
          { value: 25, color: 'violet', label: 'Other', tooltip: 'Other – 25 Gb' }
        ]}
      />
    </Stack>
  ),
  args: {}
}
