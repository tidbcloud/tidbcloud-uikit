import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Loader } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Loader>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Loader> = {
  title: 'Primitive/Feedback/Loader',
  component: Loader,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...rest }) {
  return <Loader {...rest}></Loader>
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <PrimaryDemo {...rest} />,
  args: {},
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: { type: 'select' }
    },
    size: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    variant: {
      options: ['oval', 'dots', 'bars'],
      control: { type: 'select' }
    }
  }
}
