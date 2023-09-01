import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MediaQuery, Text } from '@tidbcloud/uikit'

type Story = StoryObj<typeof MediaQuery>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof MediaQuery> = {
  title: 'Primitive/MediaQuery',
  component: MediaQuery,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <MediaQuery
      query="(max-width: 75em) and (min-width: 50em)"
      styles={{ color: '#CC0000', '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>
        Stretch the browser width, when it reaches (max-width: 75em) and (min-width: 50em) breakpoints, will turn red!
      </Text>
    </MediaQuery>
  ),
  args: {}
}
