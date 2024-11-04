import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Avatar, Box, UnstyledButton, Group, Text, Kbd } from '@tidbcloud/uikit'

type Story = StoryObj<typeof UnstyledButton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof UnstyledButton> = {
  title: 'Primitive/Buttons/UnstyledButton',
  component: UnstyledButton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Box>
      <Text mb={16} c="gray" fz={12}>
        UnstyledButton resets default <Kbd>button</Kbd> styles, it can be used to create custom buttons:
      </Text>
      <UnstyledButton>
        <Group>
          <Avatar size={40} color="blue">
            BH
          </Avatar>
          <div>
            <Text>Bob Handsome</Text>
            <Text size="xs" color="dimmed">
              bob@pingcap.com
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Box>
  ),
  args: {}
}
