import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stack, Typography, ColorSwatch, Group } from '@tidbcloud/uikit'
import { Color, useTheme } from '@tidbcloud/uikit/theme'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

function ColorRow({ name, colors }: { name: Color; colors: string[] }) {
  return (
    <Group>
      <Typography variant="body-md" miw={60}>
        {name}
      </Typography>
      <Group>
        {colors?.map((color, index) => (
          <Stack spacing={4} miw={60} align="center">
            <ColorSwatch color={color!} key={index} />
            <Typography variant="body-xs">{color}</Typography>
          </Stack>
        ))}
      </Group>
    </Group>
  )
}

function ColorMain({ colorScheme }: { colorScheme: 'light' | 'dark' }) {
  const theme = useTheme(colorScheme)

  return (
    <Stack spacing={24}>
      <Stack spacing={8}>
        <Typography variant="headline-md">Primary Color</Typography>
        <ColorRow name="carbon" colors={theme.colors.carbon} />
      </Stack>

      <Stack spacing={8}>
        <Typography variant="headline-md">Functional Color</Typography>
        <ColorRow name="peacock" colors={theme.colors.peacock} />
        <ColorRow name="red" colors={theme.colors.red} />
        <ColorRow name="green" colors={theme.colors.green} />
        <ColorRow name="yellow" colors={theme.colors.yellow} />
      </Stack>

      <Stack spacing={8}>
        <Typography variant="headline-md">Illustration Color</Typography>
        <ColorRow name="aqua" colors={theme.colors.aqua} />
        <ColorRow name="purple" colors={theme.colors.purple} />
        <ColorRow name="rosy" colors={theme.colors.rosy} />
        <ColorRow name="thyme" colors={theme.colors.thyme} />
        <ColorRow name="mustard" colors={theme.colors.mustard} />
        <ColorRow name="violet" colors={theme.colors.violet} />
        <ColorRow name="mauve" colors={theme.colors.mauve} />
        <ColorRow name="magenta" colors={theme.colors.magenta} />
        <ColorRow name="airy" colors={theme.colors.airy} />
        <ColorRow name="sky" colors={theme.colors.sky} />
        <ColorRow name="navy" colors={theme.colors.navy} />
        <ColorRow name="blue" colors={theme.colors.blue} />
        <ColorRow name="ocher" colors={theme.colors.ocher} />
        <ColorRow name="gray" colors={theme.colors.gray} />
      </Stack>
    </Stack>
  )
}

const meta: Meta<typeof ColorMain> = {
  title: 'Theme/ColorPalette',
  component: ColorMain,
  tags: ['autodocs'],
  decorators: [decorator],
  argTypes: {
    colorScheme: {
      options: ['light', 'dark'],
      control: { type: 'select' }
    }
  }
}

export default meta

type Story = StoryObj<typeof ColorMain>

export const Light: Story = {
  args: {
    colorScheme: 'light'
  },
  render: (args) => <ColorMain {...args} />
}

export const Dark: Story = {
  args: {
    colorScheme: 'dark'
  },
  render: (args) => <ColorMain {...args} />
}
