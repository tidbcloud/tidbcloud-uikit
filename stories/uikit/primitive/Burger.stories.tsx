import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Burger } from '@tidbcloud/uikit'
import { useDisclosure } from '@tidbcloud/uikit/hooks'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Burger>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Burger> = {
  title: 'Primitive/Navigation/Burger',
  component: Burger,
  decorators: [decorator],
  parameters: {},
  argTypes: {
    size: {
      options: SIZE_LIST,
      control: 'inline-radio'
    }
  }
}

export default meta

function DemoBase(props: Omit<React.ComponentPropsWithoutRef<typeof Burger>, 'opened' | 'onChange'>) {
  const [opened, { toggle }] = useDisclosure(false)
  return <Burger opened={opened} onClick={toggle} {...props} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: DemoBase,
  args: {
    size: 'md'
  }
}
