import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { RingProgress } from '@tidbcloud/uikit'

type Story = StoryObj<typeof RingProgress>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof RingProgress> = {
  title: 'Primitive/Feedback/RingProgress',
  component: RingProgress,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <RingProgress
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Hello' },
        { value: 20, color: 'blue', tooltip: 'There' },
        { value: 15, color: 'indigo', tooltip: 'You' }
      ]}
    />
  ),
  args: {}
}

export function ColorsIndex() {
  return (
    <div style={{ padding: 40 }}>
      <RingProgress
        sections={[
          {
            value: 10,
            color: 'blue.4'
          },
          {
            value: 10,
            color: 'red.1'
          },
          {
            value: 10,
            color: 'orange.9'
          }
        ]}
      />
    </div>
  )
}

export function WithTooltips() {
  return (
    <div style={{ padding: 40 }}>
      <RingProgress
        sections={[
          { value: 40, color: 'cyan', tooltip: 'Hello' },
          { value: 20, color: 'blue', tooltip: 'There' },
          { value: 15, color: 'indigo', tooltip: 'You' }
        ]}
      />
    </div>
  )
}

export function WithSectionProps() {
  return (
    <div style={{ padding: 40 }}>
      <RingProgress
        sections={[
          { value: 40, color: 'cyan', onClick: () => console.log('1') },
          { value: 20, color: 'blue', onClick: () => console.log('2') },
          { value: 15, color: 'indigo', onClick: () => console.log('3') }
        ]}
      />
    </div>
  )
}

export function WithRootColor() {
  return (
    <div style={{ padding: 40 }}>
      <RingProgress
        sections={[
          { value: 40, color: 'cyan' },
          { value: 20, color: 'blue' },
          { value: 15, color: 'indigo' }
        ]}
        rootColor="red"
      />
    </div>
  )
}
