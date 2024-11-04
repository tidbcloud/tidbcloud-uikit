import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Collapse } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof Collapse>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Collapse> = {
  title: 'Primitive/Misc/Collapse',
  component: Collapse,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button onClick={() => setOpened((o) => !o)}>Toggle content</Button>

      <Collapse in={opened}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum omnis aliquam voluptatum delectus quas, et vero
        nobis voluptatibus fugit exercitationem laboriosam dolor voluptatem! Est ea ipsum consequatur quod amet nihil!
      </Collapse>
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
