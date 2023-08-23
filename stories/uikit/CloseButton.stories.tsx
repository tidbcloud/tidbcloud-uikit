import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CloseButton, Stack } from '@tidbcloud/uikit'

import { COLOR_LIST, VARIANT_LIST, SIZE_LIST } from '../constants'

type Story = StoryObj<typeof CloseButton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CloseButton> = {
  title: 'Primitive/CloseButton',
  component: CloseButton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Stack
      align="flex-start"
      sx={{
        backgroundColor: (rest as any).variant === 'white' ? '#ddd' : 'transparent',
        padding: 16
      }}
    >
      <CloseButton {...rest} />
    </Stack>
  ),
  parameters: {
    controls: {
      expanded: true
    }
  },
  args: {},
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: { type: 'select' }
    },
    variant: {
      options: VARIANT_LIST.concat('white'),
      control: { type: 'select' }
    },
    gradient: {
      control: 'object',
      description: `<div> Controls gradient settings in gradient variant only. Type is MantineGradient.</div>
<div>example: {from: 'color-from', to: 'color-to', deg: 120}</div>`,
      table: {
        type: {
          summary: 'MantineGradient'
        }
      },
      if: {
        arg: 'variant',
        eq: 'gradient'
      }
    },
    radius: {
      options: SIZE_LIST,
      control: {
        type: 'select'
      }
    },
    iconSize: {
      control: {
        type: 'number' || 'string'
      },
      description: 'Width and height of X icon',
      table: {
        type: {
          summary: 'number | string'
        }
      }
    },
    size: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    loaderProps: {
      control: 'object',
      if: {
        arg: 'loading',
        truthy: true
      },
      description: 'Props spread to Loader component, example: {size: "sm", color: "red", variant: "filled"}',
      table: {
        type: {
          summary: 'LoaderProps'
        }
      }
    }
  }
}
