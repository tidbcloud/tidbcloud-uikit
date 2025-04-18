import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Badge, BadgeProps, Group, useMantineTheme } from '@tidbcloud/uikit'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Badge>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Badge> = {
  title: 'Primitive/Data display/Badge',
  component: Badge,
  decorators: [decorator],
  parameters: {},
  argTypes: {
    size: {
      options: SIZE_LIST,
      control: 'inline-radio'
    },
    radius: {
      options: SIZE_LIST,
      control: 'inline-radio'
    }
  }
}

export default meta

function Variants({ size, radius }: BadgeProps) {
  return (
    <Group p={40}>
      <Badge variant="light" size={size} radius={radius}>
        Light
      </Badge>
      <Badge variant="filled" size={size} radius={radius}>
        Filled
      </Badge>
      <Badge variant="outline" size={size} radius={radius}>
        Outline
      </Badge>
      <Badge variant="dot" size={size} radius={radius}>
        Dot
      </Badge>
      <Badge variant="gradient" size={size} radius={radius}>
        Gradient
      </Badge>
      <Badge variant="gradient" gradient={{ deg: 30, from: 'red', to: 'orange' }} size={size} radius={radius}>
        Custom gradient
      </Badge>
      <Badge variant="gradient" gradient={{ deg: 115, from: '#FC00CF', to: '#CCFFEF' }} size={size} radius={radius}>
        hex gradient
      </Badge>
    </Group>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: Variants
}

const AllColors = ({ variant }: { variant: BadgeProps['variant'] }) => {
  const theme = useMantineTheme()

  return (
    <Group>
      {Object.entries(theme.colors).map(([color]) => (
        <Badge key={color} variant={variant} color={color}>
          {color}
        </Badge>
      ))}
    </Group>
  )
}

export const AllOutlineColors: Story = {
  render: () => {
    return <AllColors variant="outline" />
  }
}

export const AllDotColors: Story = {
  render: () => {
    return <AllColors variant="dot" />
  }
}

export const AllFilledColors: Story = {
  render: () => {
    return <AllColors variant="filled" />
  }
}

export const AllLightColors: Story = {
  render: () => {
    return <AllColors variant="light" />
  }
}

export const AllSizes: Story = {
  render: () => {
    return (
      <Group>
        {SIZE_LIST.map((size) => (
          <Badge key={size} variant="dot" color="green" size={size}>
            Available
          </Badge>
        ))}
      </Group>
    )
  }
}
