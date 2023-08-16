import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AspectRatio, Image } from '@tidbcloud/uikit'

type Story = StoryObj<typeof AspectRatio>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof AspectRatio> = {
  title: 'Primitive/AspectRatio',
  component: AspectRatio,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
  ),
  args: {}
}
