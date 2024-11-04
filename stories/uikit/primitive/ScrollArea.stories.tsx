import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ScrollArea } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof ScrollArea>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ScrollArea> = {
  title: 'Primitive/Misc/ScrollArea',
  component: ScrollArea,
  decorators: [decorator],
  parameters: {}
}

export default meta

const content = Array(10)
  .fill(0)
  .map((_, index) => (
    <p key={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui minima, voluptates aperiam labore delectus
      consequuntur tempore a sed ullam? Vitae ducimus amet distinctio, fugiat odio accusamus veniam sit hic.
    </p>
  ))

function PrimaryDemo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 })
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <ScrollArea style={{ height: 200 }} onScrollPositionChange={onScrollPositionChange}>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
      <div>
        scroll position x: {scrollPosition.x}, y: {scrollPosition.y}
      </div>
    </div>
  )
}

function NeverTypeDemo() {
  return (
    <ScrollArea style={{ height: 200 }} type="never">
      <div style={{ width: 600 }}>{content}</div>
    </ScrollArea>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}

export const NeverType: Story = {
  render: () => <NeverTypeDemo />,
  args: {}
}
