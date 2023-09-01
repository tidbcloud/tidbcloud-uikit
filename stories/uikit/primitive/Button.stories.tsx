import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Stack } from '@tidbcloud/uikit'

import { COLOR_LIST, VARIANT_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Button>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Button> = {
  title: 'Primitive/Button',
  component: Button,
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
      <Button color="blue" variant="filled" {...rest}>
        Settings
      </Button>
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
    loaderPosition: {
      options: ['left', 'right', 'center'],
      control: { type: 'select' },
      if: {
        arg: 'loading',
        truthy: true
      }
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
    },
    compact: {
      control: 'boolean'
    },
    uppercase: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    },
    leftIcon: {
      control: { type: 'text' },
      description: 'Adds icon before button label',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    rightIcon: {
      control: { type: 'text' },
      description: 'Adds icon after button label',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      defaultValue: 'button'
    }
  }
}

export const Secondary: Story = {
  render: ({ ...rest }) => (
    <Stack align="flex-start">
      <Button.Group orientation="horizontal" buttonBorderWidth={1} {...rest}>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
      </Button.Group>
    </Stack>
  ),
  args: {},
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' }
    },
    buttonBorderWidth: {
      control: { type: 'number' }
    }
  }
}
