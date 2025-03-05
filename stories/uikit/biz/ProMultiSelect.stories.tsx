import type { Meta, StoryObj, StoryFn } from '@storybook/react'
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
  args: {
    label: 'ProMultiSelect',
    searchable: true,
    clearable: true,
    loading: false,
    disabled: false,
    readOnly: false,
    maxDropdownHeight: 400,
    width: 330,
    height: 300,
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
