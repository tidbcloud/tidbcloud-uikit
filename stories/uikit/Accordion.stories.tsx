import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Accordion } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Accordion>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Accordion> = {
  title: 'Primitive/Accordion',
  component: Accordion,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          Colors, fonts, shadows and many other parts are customizable to fit your design needs
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>
          Configure components appearance and behavior with vast amount of settings or overwrite any part of component
          styles
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>
          With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
