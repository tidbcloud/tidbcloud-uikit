import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Group } from '@tidbcloud/uikit'
import { ProMultiSelect } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof ProMultiSelect>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ProMultiSelect> = {
  title: 'Biz/ProMultiSelect',
  component: ProMultiSelect,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    }
  },
  args: {
    label: 'ProMultiSelect',
    searchable: true,
    clearable: true,
    loading: false,
    disabled: false,
    readOnly: false,
    maxDropdownHeight: 400,
    width: 330,
    placeholder: 'Select items',
    allowSelectAll: true,
    size: 'md',
    data: [
      'Apples',
      'Cookie',
      'Milk',
      'Bananas',
      'Broccoli',
      'Carrots',
      'Chocolate',
      'Traditional Beef Wellington with Mushroom Duxelles'
    ]
  }
}

export function WithSx() {
  return (
    <Group>
      <ProMultiSelect
        label="ProMultiSelect"
        searchable={true}
        clearable={true}
        loading={false}
        disabled={false}
        sx={{
          flex: 1
        }}
      />

      <div style={{ color: 'red' }}>placeholder</div>
    </Group>
  )
}
