import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { List } from '@tidbcloud/uikit'

type Story = StoryObj<typeof List>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof List> = {
  title: 'Primitive/Typography/List',
  component: List,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...rest }) {
  return (
    <List listStyleType="disc" {...rest}>
      <List.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <PrimaryDemo {...rest} />,
  args: {
    center: false,
    withPadding: true
  },
  argTypes: {
    listStyleType: {
      options: ['disc', 'decimal', 'circle', 'square', 'none'],
      control: {
        type: 'select'
      }
    },
    type: {
      options: ['ordered', 'unordered'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select'
      }
    },
    spacing: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select'
      }
    }
  }
}
