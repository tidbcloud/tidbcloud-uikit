import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TextInput, TextInputProps, Tooltip } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof TextInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TextInput> = {
  title: 'Primitive/Inputs/TextInput',
  component: TextInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...args }) => <TextInput {...args}></TextInput>,
  args: {
    leftLabel: 'prefix',
    label: 'Label',
    placeholder: 'this is a placeholder',
    disabled: false,
    error: '',
    description: 'this is a description',
    size: 'lg'
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    label: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    error: {
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    }
  }
}

export function Controlled(props: Partial<TextInputProps>) {
  const [value, onChange] = useState('')
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput value={value} onChange={(event) => onChange(event.currentTarget.value)} {...props} />
    </div>
  )
}

export function WithInputContainer() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput
        label="with tooltip"
        description="with tooltip"
        error="with tooltip"
        inputContainer={(children) => (
          <Tooltip label="tooltip" position="bottom-start">
            {children}
          </Tooltip>
        )}
      />
    </div>
  )
}

export function InputWrapperOrder() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput value="Default" label="Input label" description="Input description" error="Input error" />

      <TextInput mt={50} value="Text input" label="Input label" required inputWrapperOrder={['label', 'input']} />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'error', 'description', 'input']}
      />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'description', 'error', 'input']}
      />

      <TextInput
        mt={50}
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
    </div>
  )
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput label="With required asterisk" withAsterisk />
      <TextInput label="Just required" required />
      <TextInput label="Required asterisk off" required withAsterisk={false} />
      <TextInput label="Required false asterisk on" required={false} withAsterisk />
    </div>
  )
}
