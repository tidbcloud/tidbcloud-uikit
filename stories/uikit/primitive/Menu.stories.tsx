import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Menu, Button, Text, Group } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Menu>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Menu> = {
  title: 'Primitive/Overlays/Menu',
  component: Menu,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo({ ...props }) {
  return (
    <Group justify="center" h={500}>
      <Menu shadow="md" width={200} {...props}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item>Gallery</Menu.Item>
          <Menu.Item
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item>Transfer my data</Menu.Item>
          <Menu.Item disabled>Disabled</Menu.Item>
          {/* https://github.com/mantinedev/mantine/issues/7503 */}
          <Menu.Item color="red">Color red</Menu.Item>
          <Menu.Item c="red.7">Delete my account</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: PrimaryDemo,
  args: {
    position: 'bottom',
    offset: 5,
    withArrow: false,
    arrowPosition: 'side'
  },
  argTypes: {
    withArrow: {
      control: 'boolean'
    },
    position: {
      control: 'select',
      options: [
        'bottom',
        'left',
        'right',
        'top',
        'bottom-end',
        'bottom-start',
        'left-end',
        'left-start',
        'right-end',
        'right-start',
        'top-end',
        'top-start'
      ]
    },
    arrowPosition: {
      control: 'select',
      options: ['center', 'side']
    },
    offset: {
      control: 'number'
    }
  }
}
