import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Transition, useMantineTheme, Button, Paper } from '@tidbcloud/uikit'
import { useClickOutside } from '@tidbcloud/uikit/hooks'
import { useState } from 'react'

type Story = StoryObj<typeof Transition>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Transition> = {
  title: 'Primitive/Transition',
  component: Transition,
  decorators: [decorator],
  parameters: {}
}

export default meta

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity'
}

function PrimaryDemo() {
  const [opened, setOpened] = useState(false)
  const clickOutsideRef = useClickOutside(() => setOpened(false))
  const theme = useMantineTheme()

  return (
    <div
      style={{
        maxWidth: '200px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            shadow="md"
            ref={clickOutsideRef}
            style={{
              ...styles,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '200px',
              padding: theme.spacing.xl,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white
            }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  )
}
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
