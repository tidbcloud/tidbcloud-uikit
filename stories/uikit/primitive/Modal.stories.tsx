import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, Modal, Button } from '@tidbcloud/uikit'
import { useDisclosure } from '@tidbcloud/uikit/hooks'

type Story = StoryObj<typeof Modal>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Modal> = {
  title: 'Primitive/Modal',
  component: Modal,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        Modal with header, press escape or click on overlay to close
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
