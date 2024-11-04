import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Anchor, Breadcrumbs } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Breadcrumbs>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Primitive/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo></Demo>,
  args: {}
}

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' }
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  )
}
