import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Box } from '@tidbcloud/uikit'
import { SearchArea } from '@tidbcloud/uikit/biz'
import { FormItem, FormTextInput } from '@tidbcloud/uikit/src/biz'
import { useState } from 'react'

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

interface FormData {
  category: string
  customerId: string
  operator: string
  status: string
}

function Demo() {
  const [searchQuery, setSearchQuery] = useState<FormData | null>(null)
  const handleSubmit = async (data: FormData) => {
    setSearchQuery(data)
  }

  const jsonString = JSON.stringify(searchQuery, null, 4)

  const formData: FormItem[] = [
    {
      type: 'text',
      name: 'category',
      placeholder: 'Category XX'
    },
    { type: 'text', name: 'customerId', placeholder: 'Customer ID' },
    { type: 'text', name: 'operator', placeholder: 'Operator' },
    { type: 'datepicker', name: 'date', placeholder: 'Date' },
    {
      type: 'select',
      name: 'plan',
      placeholder: 'Plan',
      data: [
        { label: 'Basic', value: 'basic' },
        { label: 'Pro', value: 'pro' },
        { label: 'Enterprise', value: 'enterprise' }
      ]
    }
  ]

  return (
    <Box mih={250}>
      <Box>
        <SearchArea<FormData>
          data={formData}
          // defaultValues are required
          defaultValues={{ category: '', customerId: '', operator: '', status: '' }}
          // onSubmit is required
          onSubmit={handleSubmit}
        />
      </Box>
      <Box>{jsonString && jsonString !== '{}' && <pre>{jsonString}</pre>}</Box>
    </Box>
  )
}

const code = `
function Demo() {
  const [searchQuery, setSearchQuery] = useState<FormData | null>(null)
  const handleSubmit = async (data: FormData) => {
    setSearchQuery(data)
  }

  const jsonString = JSON.stringify(searchQuery, null, 4)

  const formData = [
    { type: 'text' as const, name: 'category', placeholder: 'Category' },
    { type: 'text' as const, name: 'customerId', placeholder: 'Customer ID' },
    { type: 'text' as const, name: 'operator', placeholder: 'Operator' }
  ]

  return (
    <Box>
      <Box>
        <SearchArea<FormData>
          data={formData}
          // defaultValues are required
          defaultValues={{ category: '', customerId: '', operator: '', status: '' }}
          // onSubmit is required
          onSubmit={handleSubmit}
        />
      </Box>
      <Box>{jsonString && jsonString !== '{}' && <pre>{jsonString}</pre>}</Box>
    </Box>
  )
}
`

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: () => <Demo />,
  args: {
    children: <Demo />
  }
}
