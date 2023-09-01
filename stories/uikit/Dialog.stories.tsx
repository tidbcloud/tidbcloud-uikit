import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Group, Text, TextInput } from '@tidbcloud/uikit'
import { Dialog } from '@tidbcloud/uikit'
import { useState } from 'react'

import { SIZE_LIST } from '../constants'

type Story = StoryObj<typeof Dialog>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Dialog> = {
  title: 'Primitive/Dialog',
  component: Dialog,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo({ ...rest }) {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={() => setOpened(false)} size="lg" radius="md" {...rest}>
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => <Demo {...rest} />,
  args: {
    withCloseButton: true,
    withBorder: true
  },
  argTypes: {
    size: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    shadow: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    radius: {
      options: SIZE_LIST,
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'theme.defaultRadius'
        }
      }
    }
  }
}
