import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Drawer, Group, Button } from '@tidbcloud/uikit'
import { useState } from 'react'

import { SIZE_LIST } from '../constants'
import { AuthenticationForm } from '../shared/AuthenticationForm'

type Story = StoryObj<typeof Drawer>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Drawer> = {
  title: 'Primitive/Drawer',
  component: Drawer,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo({ ...rest }) {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)} padding="xl" size="xl" {...rest}>
        <AuthenticationForm />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <Demo {...rest} />,
  args: {
    title: 'Register',
    closeButtonLabel: '',
    closeOnClickOutside: true,
    closeOnEscape: true,
    lockScroll: false,
    withCloseButton: true,
    withinPortal: false
  },
  argTypes: {
    position: {
      options: ['left', 'right', 'bottom', 'top'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    overlayOpacity: {
      control: {
        type: 'number'
      }
    },
    overlayBlur: {
      control: {
        type: 'number'
      }
    },
    padding: {
      options: SIZE_LIST,
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'theme.defaultRadius'
        }
      }
    },
    zIndex: {
      control: {
        type: 'number'
      }
    }
  }
}
