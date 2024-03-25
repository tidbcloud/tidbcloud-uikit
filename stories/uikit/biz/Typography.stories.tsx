import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stack, Typography, TYPOGRAPHY_STYLES_MAP } from '@tidbcloud/uikit'

import { COLOR_LIST } from '../../constants.js'

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
  tags: ['autodocs'],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  parameters: {
    controls: { expanded: true }
  },
  args: {
    variant: 'label-lg',
    children: 'This is a label-lg'
  },
  argTypes: {
    c: {
      options: ['', ...COLOR_LIST],
      control: { type: 'select' }
    },
    variant: {
      options: Object.keys(TYPOGRAPHY_STYLES_MAP),
      control: { type: 'select' }
    }
  }
}

export const Variants: Story = {
  render: () => {
    const texts = Object.keys(TYPOGRAPHY_STYLES_MAP).map((i) => (
      <Typography variant={i as any} key={i}>
        this is variant: {i}
      </Typography>
    ))
    return <Stack>{texts}</Stack>
  }
}
