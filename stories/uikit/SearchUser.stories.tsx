import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Box } from '@tidbcloud/uikit'
import { CodeBlock, SearchArea } from '@tidbcloud/uikit/biz'
import { FormTextInput } from '@tidbcloud/uikit/src/biz'
import { useState } from 'react'

type Story = StoryObj<typeof CodeBlock>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CodeBlock> = {
  title: 'Biz/SearchUser',
  component: CodeBlock,
  decorators: [decorator],
  parameters: {}
}

export default meta

const code = `
import { CodeBlock } from '@tidbcloud/uikit';

function Demo() {
  return <CodeBlock>Put some real code here</CodeBlock>
}
`

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

  return (
    <Box w="100%" h="100%" mih={800} p={24}>
      <Box p={16}>
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
          <FormTextInput name="status" placeholder="Status" w={220} />
        </SearchArea>
      </Box>
      <Box p={16}>
        <pre>result={JSON.stringify(searchQuery, null, 4)}</pre>
      </Box>
    </Box>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo />,
  args: {}
}
