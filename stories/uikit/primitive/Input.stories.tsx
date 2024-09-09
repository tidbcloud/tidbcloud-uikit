import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Input } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Input>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Input> = {
  title: 'Primitive/Input',
  component: Input,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <Input {...props}></Input>,
  args: {
    placeholder: 'this is a placeholder',
    disabled: false
  },
  argTypes: {
    placeholder: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
}
