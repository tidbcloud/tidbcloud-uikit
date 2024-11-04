import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Grid } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Grid>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Grid> = {
  title: 'Primitive/Layout/Grid',
  component: Grid,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Grid {...rest}>
      <Grid.Col span={2} bg="#EFEFEF">
        1
      </Grid.Col>
      <Grid.Col span={2} bg="#DDDDDD">
        2
      </Grid.Col>
      <Grid.Col span={2} bg="#EFEFEF">
        3
      </Grid.Col>
    </Grid>
  ),
  args: {
    gutter: 5
  },
  argTypes: {
    align: {
      options: ['stretch', 'flex-start', 'flex-end', 'center'],
      control: { type: 'select' }
    },
    justify: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'select' }
    }
  }
}
