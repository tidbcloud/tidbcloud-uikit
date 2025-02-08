import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Group, Stack, Switch } from '@tidbcloud/uikit'
import { IconSettings01 } from '@tidbcloud/uikit/icons'
import { useState } from 'react'

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
  title: 'Primitive/Buttons/Button',
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
        padding: 16
      }}
    >
      <Button {...rest}>Settings</Button>
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
    fullWidth: {
      control: 'boolean'
    },
    leftSection: {
      control: { type: 'text' },
      description: 'Adds icon before button label',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    rightSection: {
      control: { type: 'text' },
      description: 'Adds icon after button label',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    }
  }
}

export const GroupedButtons: StoryObj<typeof Button.Group> = {
  render: ({ ...rest }) => (
    <Stack align="flex-start">
      <Button.Group orientation="horizontal" borderWidth={1} {...rest}>
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
    }
  }
}

export const AllVariants: Story = {
  render: () => (
    <Group sx={(theme) => ({ backgroundColor: theme.white, padding: 32 })}>
      {VARIANT_LIST.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </Group>
  )
}

export const AllSizes: Story = {
  render: () => {
    return (
      <Group>
        {SIZE_LIST.map((size) => (
          <Button key={size} size={size}>
            size-{size}
          </Button>
        ))}
      </Group>
    )
  }
}

export const AllColors: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(false)

    return (
      <Group>
        <Button disabled={disabled} variant="light">
          Light
        </Button>
        <Button disabled={disabled} variant="outline">
          Outline
        </Button>
        <Button disabled={disabled} variant="filled">
          Filled
        </Button>
        <Button disabled={disabled} variant="subtle">
          Subtle
        </Button>
        {COLOR_LIST.map((color) => (
          <Button key={color} color={color} disabled={disabled}>
            {color}
          </Button>
        ))}

        <Switch checked={disabled} onChange={() => setDisabled(!disabled)} label="toggle disabled" />
      </Group>
    )
  }
}

export const LoadingButton: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    return (
      <Stack align="flex-start" p={32}>
        <Button loading={loading}>Submit</Button>
        <Button loading={loading} variant="default" leftSection={<IconSettings01 size={16} />}>
          Edit Settings
        </Button>
        <Button loading={loading} color="red" variant="light">
          I understand the consequences, delete
        </Button>

        <Switch checked={loading} onChange={() => setLoading(!loading)} label="toggle loading" />
      </Stack>
    )
  }
}

export const DisabledButton: Story = {
  render: () => (
    <Button disabled variant="light">
      Disabled
    </Button>
  )
}

export const WithIcon: Story = {
  render: () => (
    <Group>
      <Button leftSection={<IconSettings01 size={12} />} variant="default" size="xs">
        Settings xs
      </Button>

      <Button rightSection={<IconSettings01 size={12} />} variant="default" size="xs">
        Settings xs
      </Button>

      <Button leftSection={<IconSettings01 size={16} />} variant="default">
        Settings
      </Button>

      <Button rightSection={<IconSettings01 size={16} />} variant="default">
        Settings
      </Button>
    </Group>
  )
}

export const DataDisabled: Story = {
  render: () => (
    <Button data-disabled variant="default" color="peacock">
      With data-disabled
    </Button>
  )
}
