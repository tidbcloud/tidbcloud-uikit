import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { FileInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof FileInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof FileInput> = {
  title: 'Primitive/FileInput',
  component: FileInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <FileInput {...props}></FileInput>,
  args: {
    multiple: false,
    disabled: false,
    accept: ''
  },
  argTypes: {
    multiple: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    accept: {
      control: 'text'
    }
  }
}
