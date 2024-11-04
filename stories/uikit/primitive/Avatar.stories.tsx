import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Avatar, Group } from '@tidbcloud/uikit'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Avatar>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Avatar> = {
  title: 'Primitive/Data display/Avatar',
  component: Avatar,
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

const code = `
import { Avatar } from '@tidbcloud/uikit';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}`

const names = ['John Doe', 'Jane Mol', 'Alex Lump', 'Sarah Condor', 'Mike Johnson', 'Kate Kok', 'Tom Smith']

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />)

  return (
    <>
      {/* Default placeholder */}
      <Avatar radius="xl" />
      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Group>{avatars}</Group>
    </>
  )
}

export const Primary: Story = {
  render: () => <Demo />,
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  }
}
