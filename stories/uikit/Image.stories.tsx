import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Image } from '@tidbcloud/uikit'

import { SIZE_LIST } from '../constants'

type Story = StoryObj<typeof Image>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Image> = {
  title: 'Primitive/Image',
  component: Image,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <Image width={400} radius="md" alt="Random unsplash image" {...rest} />,
  args: {
    src: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    caption: 'this is an example',
    withPlaceholder: true,
    width: 400,
    height: 200
  },
  argTypes: {
    radius: {
      options: SIZE_LIST,
      control: { type: 'select' }
    }
  }
}
