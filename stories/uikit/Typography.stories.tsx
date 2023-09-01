import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stack } from '@tidbcloud/uikit'
import { Typography, TYPOGRAPHY_STYLES_MAP } from '@tidbcloud/uikit/biz'

import { COLOR_LIST } from '../constants'

type Story = StoryObj<typeof Typography>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Typography> = {
  title: 'Biz/Typography',
  component: Typography,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo({ ...args }) {
  const texts = Object.keys(TYPOGRAPHY_STYLES_MAP).map((i) => (
    <Typography variant={i as any} key={i} {...args}>
      variant: {i}
    </Typography>
  ))
  return <Stack>{texts}</Stack>
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true }
  },
  render: ({ ...args }) => <Demo {...args} />,
  args: {},
  argTypes: {
    c: {
      options: ['', ...COLOR_LIST],
      control: { type: 'select' }
    }
  }
}
