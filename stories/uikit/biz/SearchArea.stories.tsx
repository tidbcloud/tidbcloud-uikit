import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { SearchArea } from '@tidbcloud/uikit/biz'
import { FormItem } from '@tidbcloud/uikit/src/biz'

type Story = StoryObj<typeof SearchArea>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof SearchArea> = {
  title: 'Biz/SearchArea',
  component: SearchArea,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

const formData: FormItem[] = [
  { type: 'text', name: 'category', placeholder: 'Category' },
  { type: 'text', name: 'customerId', placeholder: 'Customer ID' },
  { type: 'text', name: 'operator', placeholder: 'Operator' },
  { type: 'datepicker', name: 'date', placeholder: 'Date' },
  { type: 'timerangepicker', name: 'timerange', placeholder: 'Time Range' },
  {
    type: 'select',
    name: 'plan',
    placeholder: 'Plan Select',
    data: [
      { label: 'Basic', value: 'basic' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' }
    ]
  },
  {
    type: 'multiselect',
    name: 'roles',
    placeholder: 'Roles Select',
    data: [
      { label: 'Admin', value: 'admin' },
      { label: 'R&W', value: 'r_and_w' },
      { label: 'R', value: 'r_only' }
    ]
  }
]

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true }
  },
  args: {
    recoverFromURLEnabled: true,
    data: formData,
    defaultValues: {
      category: '',
      customerId: '',
      operator: '',
      date: null,
      plan: '',
      timerange: { type: 'relative', value: 259200 },
      roles: ['admin', 'r_and_w']
    },
    debugEnabled: true,
    onSubmit: (data) => console.log(data)
  }
}
