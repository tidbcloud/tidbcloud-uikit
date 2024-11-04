import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Center, Group, Overlay } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof Overlay>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Overlay> = {
  title: 'Primitive/Overlays/Overlay',
  component: Overlay,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Center sx={{ height: 100, position: 'relative' }}>
        {visible && <Overlay opacity={0.6} color="#000" zIndex={5} />}
        <Button color={visible ? 'red' : 'teal'}>{!visible ? 'Click as much as you like' : "Won't click, haha"}</Button>
      </Center>

      <Group justify="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo />,
  args: {}
}
