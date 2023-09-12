import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, useMantineTheme } from '@tidbcloud/uikit'
import { Dot } from '@tidbcloud/uikit/biz'

import { COLOR_LIST } from '../../constants'

type Story = StoryObj<typeof Dot>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Dot> = {
  title: 'Biz/Dot',
  component: Dot,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  const theme = useMantineTheme()
  const dots = Object.keys(theme.colors).map((i) => <Dot color={i} key={i} />)
  return <Group>{dots}</Group>
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    color: 'blue'
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: {
        type: 'select'
      }
    }
  }
}

export const AllColors: Story = {
  render: () => <Demo />
}
