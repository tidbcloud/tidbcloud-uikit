import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { NativeSelect } from '@tidbcloud/uikit'

type Story = StoryObj<typeof NativeSelect>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof NativeSelect> = {
  title: 'Primitive/Inputs/NativeSelect',
  component: NativeSelect,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => (
    <NativeSelect
      data={['React', 'Vue', 'Angular', 'Svelte']}
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
      {...props}
    />
  ),
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
}
