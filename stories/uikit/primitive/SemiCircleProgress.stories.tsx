import type { Meta, StoryFn } from '@storybook/react'
import { Button, SemiCircleProgress } from '@tidbcloud/uikit'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof SemiCircleProgress> = {
  title: 'Primitive/Feedback/SemiCircleProgress',
  component: SemiCircleProgress,
  decorators: [decorator],
  parameters: {}
}

export default meta

export function Basic() {
  return (
    <SemiCircleProgress
      fillDirection="left-to-right"
      orientation="up"
      filledSegmentColor="blue"
      size={200}
      thickness={12}
      value={40}
      label="Label"
    />
  )
}

export function ChangeEmptySegmentColor() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />
}

export function ChangeLabelPosition() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  )
}

export function FilledSegmentTransition() {
  const [value, setValue] = useState(30)

  return (
    <>
      <SemiCircleProgress value={value} transitionDuration={250} label={`${value}%`} />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))} mt="xl" fullWidth>
        Set random value
      </Button>
    </>
  )
}
