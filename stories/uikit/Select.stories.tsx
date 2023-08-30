import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Select } from '@tidbcloud/uikit'

import { SIZE_LIST } from '../constants'

type Story = StoryObj<typeof Select>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Select> = {
  title: 'Primitive/Select',
  component: Select,
  decorators: [decorator],
  parameters: {}
}

export default meta

const data = ['React', 'Angular', 'Vue', 'Svelte']

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={data} clearable defaultValue="React" readOnly searchable />
    </div>
  )
}

export function CreatableWithNoFilter() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        creatable
        searchable
        getCreateLabel={() => 'createLabel'}
        shouldCreate={() => true}
        data={['8.0.0', '8.1.0']}
        value="8.0.0"
      />
    </div>
  )
}

export function OverrideDropdownPadding() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        styles={{
          itemsWrapper: {
            padding: 40
          }
        }}
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
  const sizes = SIZE_LIST.map((size) => (
    <Select
      data={data}
      placeholder={`Select ${size}`}
      size={size}
      clearable
      defaultValue={data[0]}
      key={size}
      mt="md"
      styles={{ rightSection: { backgroundColor: 'pink' } }}
    />
  ))

  return <div style={{ padding: 40 }}>{sizes}</div>
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' }
      ]}
    />
  ),
  args: {}
}
