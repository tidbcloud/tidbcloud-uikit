import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Box } from '@tidbcloud/uikit'
import { SearchArea } from '@tidbcloud/uikit/biz'
import { FormTextInput } from '@tidbcloud/uikit/src/biz'
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

  const formData = [
    { type: 'text', name: 'category', placeholder: 'Category' },
    { type: 'text', name: 'customerId', placeholder: 'Customer ID' },
    { type: 'text', name: 'operator', placeholder: 'Operator'}
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

const code = `
function Demo() {
  const [searchQuery, setSearchQuery] = useState<FormData | null>(null)
  const handleSubmit = async (data: FormData) => {
    setSearchQuery(data)
  }

  const jsonString = JSON.stringify(searchQuery, null, 4)

  return (
    <Box>
      <Box>
        <SearchArea<FormData>
          // defaultValues are required
          defaultValues={{ category: '', customerId: '', operator: '', status: '' }}
          // onSubmit is required
          onSubmit={handleSubmit}
        >
          {/* // name is required and should be aligned with FormData */}
          <FormTextInput name="category" placeholder="Category" w={220} />
          <FormTextInput name="customerId" placeholder="Customer ID" w={220} />
          <FormTextInput name="operator" placeholder="Operator" w={220} />
        </SearchArea>
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
