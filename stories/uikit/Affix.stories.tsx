import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Affix, Button } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Affix>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Affix> = {
  title: 'Primitive/Affix',
  component: Affix,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <div>
      <p>
        Affix renders div element with fixed position inside Portal component. Use component to display elements fixed
        at any position on screen, for example, scroll to top button:
      </p>

      <Affix position={{ top: 100, left: 50 }}>
        <Button onClick={() => alert('Scroll to top!')}>Scroll to top</Button>
      </Affix>
    </div>
  ),
  args: {}
}
