import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Spoiler } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Spoiler>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Spoiler> = {
  title: 'Primitive/Spoiler',
  component: Spoiler,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ children, ...rest }) => (
    <Spoiler {...rest}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae ipsam sint quos rerum similique, rem
      impedit eligendi temporibus reiciendis distinctio possimus nesciunt quasi debitis suscipit non mollitia eveniet
      fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint vel dignissimos rerum libero
      exercitationem doloribus ducimus officiis iusto ea molestias earum autem neque repellat tempora, sequi odit minus
      reiciendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore eveniet modi dolor repudiandae
      necessitatibus error commodi delectus repellendus nulla? Vitae architecto dolor nisi amet. Porro laborum obcaecati
      quae recusandae quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a sint nostrum expedita
      dolores quo perferendis quas, consectetur autem hic eius aliquam eum suscipit. Ex voluptatibus nesciunt ut
      molestias voluptates?
    </Spoiler>
  ),
  args: {
    showLabel: 'Show more',
    maxHeight: 120,
    hideLabel: 'Hide',
    transitionDuration: 200
  }
}
