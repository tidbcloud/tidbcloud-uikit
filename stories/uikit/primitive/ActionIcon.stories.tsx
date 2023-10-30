import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ActionIcon } from '@tidbcloud/uikit'
import { IconMenu01 } from '@tidbcloud/uikit/icons'

import { COLOR_LIST, VARIANT_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof ActionIcon>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ActionIcon> = {
  title: 'Primitive/ActionIcon',
  component: ActionIcon,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <ActionIcon color="cyan" disabled={false} loading={false} variant="filled" {...rest}>
      <IconMenu01 />
    </ActionIcon>
  ),
  parameters: {
    controls: { expanded: true }
  },
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
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    loading: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    loaderProps: {
      control: 'object',
      if: {
        arg: 'loading',
        truthy: true
      },
      description: `<div>Props added to Loader component (only visible when <code>loading</code> prop is set)</div>
<div>example: {size: "sm", color: "red", variant: "filled"}</div>`,
      table: {
        type: {
          summary: 'LoaderProps'
        }
      }
    }
  }
}
