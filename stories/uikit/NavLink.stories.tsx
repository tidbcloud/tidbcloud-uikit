import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Badge, Box, NavLink } from '@tidbcloud/uikit'

type Story = StoryObj<typeof NavLink>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof NavLink> = {
  title: 'Primitive/NavLink',
  component: NavLink,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Box sx={{ width: 240 }}>
      <NavLink label="Disabled" disabled />
      <NavLink
        label="With description"
        description="Additional information"
        icon={
          <Badge size="xs" variant="filled" color="red" sx={{ width: 16, height: 16, padding: 0 }}>
            3
          </Badge>
        }
      />
      <NavLink label="Active subtle" variant="subtle" active />
      <NavLink label="Active light" active />
      <NavLink label="Active filled" variant="filled" active />
    </Box>
  ),
  args: {}
}
