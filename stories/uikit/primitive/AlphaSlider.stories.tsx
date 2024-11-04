import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AlphaSlider, Text } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof AlphaSlider>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof AlphaSlider> = {
  title: 'Primitive/Inputs/AlphaSlider',
  component: AlphaSlider,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  const [value, onChange] = useState(0.55)

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo></Demo>,
  args: {}
}
