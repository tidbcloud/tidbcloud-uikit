import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Pagination } from '@tidbcloud/uikit'
import { useState } from 'react'

import { SIZE_LIST } from '../constants'

type Story = StoryObj<typeof Pagination>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Pagination> = {
  title: 'Primitive/Pagination',
  component: Pagination,
  decorators: [decorator],
  parameters: {},
  argTypes: {
    size: {
      options: SIZE_LIST,
      control: 'inline-radio'
    }
  }
}

export default meta

function Controlled({ ...props }) {
  const [value, setValue] = useState(2)
  return (
    <>
      Current page: {value}
      <Pagination total={20} page={value} onChange={setValue} {...props} />
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: Controlled,
  args: {
    withControls: false,
    withEdges: false,
    disabled: false
  }
}
