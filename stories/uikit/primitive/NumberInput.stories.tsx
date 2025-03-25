import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { NumberInput } from '@tidbcloud/uikit'

type Story = StoryObj<typeof NumberInput>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof NumberInput> = {
  title: 'Primitive/Inputs/NumberInput',
  component: NumberInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <NumberInput {...props}></NumberInput>,
  args: {
    min: 0,
    max: 120,
    stepHoldDelay: 500,
    stepHoldInterval: 100,
    step: 0.05,
    decimalSeparator: ',',
    disabled: false,
    leftAddon: 'min',
    rightAddon: 'max',
    prefix: '',
    suffix: '',
    placeholder: 'placeholder'
  }
}
