import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ThemeIcon } from '@tidbcloud/uikit'
import { IconPieChart03 } from '@tidbcloud/uikit/icons'

import { COLOR_LIST, SIZE_LIST, VARIANT_LIST } from '../../constants'

type Story = StoryObj<typeof ThemeIcon>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ThemeIcon> = {
  title: 'Primitive/ThemeIcon',
  component: ThemeIcon,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <ThemeIcon {...rest}>
      <IconPieChart03 />
    </ThemeIcon>
  ),
  args: {},
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'gray'
        }
      }
    },
    size: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    radius: {
      options: SIZE_LIST,
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'theme.defaultRadius'
        }
      }
    },
    variant: {
      options: VARIANT_LIST,
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'subtle'
        }
      }
    },
    gradient: {
      control: 'object',
      description: `<div>Gradient input, only used when variant="gradient", theme.defaultGradient by default.</div>
<div>example: {from: 'color-from', to: 'color-to', deg: 120}</div>`,
      table: {
        type: {
          summary: 'MantineGradient'
        },
        defaultValue: {
          summary: 'theme.defaultGradient'
        }
      },
      if: {
        arg: 'variant',
        eq: 'gradient'
      }
    }
  }
}
