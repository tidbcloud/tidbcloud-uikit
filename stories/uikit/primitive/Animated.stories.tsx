import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AnimatedNumber, Box, Button, Center, Flex } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof Button>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Button> = {
  title: 'Primitive/Animated/AnimatedNumber',
  component: AnimatedNumber,
  decorators: [decorator],
  parameters: {}
}

export default meta

export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState(1000)
    return (
      <Box p={200}>
        <Center p={32}>
          <AnimatedNumber value={value} sx={{ fontSize: 32 }} suffix="/mo" prefix="$" />
        </Center>
        <br />
        <Button onClick={() => setValue(Math.random() * 1000)}>Click to set to another value</Button>
      </Box>
    )
  },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `<AnimatedNumber value={value} sx={{ fontSize: 32 }} suffix="/mo" prefix="$" />`
      }
    }
  }
}

export function WithGroup() {
  const [value, setValue] = useState(1000)
  const [diff, setDiff] = useState(0.1)

  return (
    <AnimatedNumber.Group>
      <Flex sx={{ '--number-flow-char-height': '0.85em' }} align="center" gap={8} fw={500}>
        <AnimatedNumber value={value} locales="en-US" format={{ style: 'currency', currency: 'USD' }} fz={32} />
        <AnimatedNumber
          value={diff}
          locales="en-US"
          format={{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }}
          fz={24}
          sx={{
            transition: 'colors 300ms'
          }}
          c={diff < 0 ? 'red' : 'green'}
        />
      </Flex>

      <Button
        onClick={() => {
          setValue(Math.random() * 1000)
          setDiff(Math.random() * (Math.random() > 0.5 ? 1 : -1))
        }}
      >
        Click to set to another value
      </Button>
    </AnimatedNumber.Group>
  )
}
