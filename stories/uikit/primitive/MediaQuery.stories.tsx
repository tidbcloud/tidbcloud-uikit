import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Stack, Typography, MediaQuery, useMantineTheme, useComputedColorScheme, Box } from '@tidbcloud/uikit'
import { CSSObject, rem, rgba } from '@tidbcloud/uikit/utils'

type Story = StoryObj<typeof Typography>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof MediaQuery> = {
  title: 'Primitive/MediaQuery',
  component: MediaQuery,
  decorators: [decorator],
  tags: ['autodocs'],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => {
    const theme = useMantineTheme()
    const colorScheme = useComputedColorScheme()

    const highlight: CSSObject = {
      backgroundColor: colorScheme === 'dark' ? rgba(theme.colors.blue[7], 0.25) : theme.colors.blue[0],
      border: `${rem(1)} solid ${colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[3]}`
    }

    const boxStyles = {
      borderRadius: theme.radius.sm,
      padding: `${rem(3)} ${rem(5)}`,
      border: `${rem(1)} solid transparent`
    }

    return (
      <Stack gap={5}>
        <MediaQuery largerThan="lg" styles={highlight}>
          <Box sx={boxStyles}>- larger than lg</Box>
        </MediaQuery>
        <MediaQuery smallerThan="lg" styles={highlight}>
          <Box sx={boxStyles}>- Smaller than lg</Box>
        </MediaQuery>
        <MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
          <Box sx={boxStyles}>- Smaller than xl, larger than sm</Box>
        </MediaQuery>
        <MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
          <Box sx={boxStyles}>- Smaller than 1500, larger than 800</Box>
        </MediaQuery>
      </Stack>
    )
  },
  parameters: {},
  args: {},
  argTypes: {}
}
