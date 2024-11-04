import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { ColorSwatch, Group, Stack, useMantineTheme, rgba } from '@tidbcloud/uikit'

type Story = StoryObj<typeof ColorSwatch>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof ColorSwatch> = {
  title: 'Primitive/Data display/ColorSwatch',
  component: ColorSwatch,
  decorators: [decorator],
  parameters: {}
}

export default meta

function PrimaryDemo() {
  const theme = useMantineTheme()
  const swatches = Object.keys(theme.colors).map((color) => <ColorSwatch key={color} color={theme.colors[color][6]} />)

  const swatchesWithOpacity = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={rgba(theme.colors[color][6], 0.5)} />
  ))

  return (
    <Stack align="center">
      <Group justify="center">{swatches}</Group>
      <Group justify="center">{swatchesWithOpacity}</Group>
    </Stack>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <PrimaryDemo />,
  args: {}
}
