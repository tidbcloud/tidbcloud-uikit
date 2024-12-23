import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { PasswordInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof PasswordInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof PasswordInput> = {
  title: 'Primitive/Inputs/PasswordInput',
  component: PasswordInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <PasswordInput {...props} placeholder="password"></PasswordInput>,
  args: {
    visible: true,
    disabled: false
  }
}

export const AllSizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
    return (
      <div>
        {sizes.map((size) => (
          <PasswordInput key={size} size={size} placeholder="password" mb="md" />
        ))}
      </div>
    )
  }
}
