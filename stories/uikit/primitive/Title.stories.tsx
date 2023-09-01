import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Title } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Title>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Title> = {
  title: 'Primitive/Title',
  component: Title,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...rest }) {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
      <Title {...rest} />
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <PrimaryDemo {...rest} />,
  args: {
    children: 'This is a title'
  },
  argTypes: {
    order: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' }
    },
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' }
    }
  }
}
