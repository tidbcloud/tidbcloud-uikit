import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { HueSlider, Text } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof HueSlider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof HueSlider> = {
  title: 'Primitive/Inputs/HueSlider',
  component: HueSlider,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  const [value, onChange] = useState(250)

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo></Demo>,
  args: {}
}
