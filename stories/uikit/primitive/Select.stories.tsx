import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Select, Loader, Stack, Group } from '@tidbcloud/uikit'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Select>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Select> = {
  title: 'Primitive/Combobox/Select',
  component: Select,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: (props) => (
    <Select
      {...props}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' }
      ]}
    />
  ),
  args: {
    label: 'Your favorite framework/library',
    placeholder: 'Pick one',
    description: 'This is a description',
    error: '',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['default', 'unstyled', 'filled'],
      control: {
        type: 'select'
      }
    },
    error: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
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
    }
  }
}

const data = ['React', 'Angular', 'Vue', 'Svelte']

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={data} clearable defaultValue="React" readOnly searchable />
    </div>
  )
}

export function OverrideDropdownPadding() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={Array(100)
          .fill(0)
          .map((_, index) => `Item ${index}`)}
      />
    </div>
  )
}

export function Scroll() {
  const content = Array(20)
    .fill(0)
    .map((_, index) => <p key={index}>`Item ${index}`</p>)

  return (
    <div>
      {content}
      <Select data={['react']} />
      {content}
    </div>
  )
}

export function Sizes() {
  return (
    <Stack style={{ padding: 40 }}>
      {SIZE_LIST.map((size) => (
        <Group>
          {size}:
          <Select
            data={data}
            placeholder={`Select ${size}`}
            size={size}
            clearable
            defaultValue={data[0]}
            key={size}
            mt="md"
          />
        </Group>
      ))}
    </Stack>
  )
}
