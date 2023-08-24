import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { BackgroundImage, BackgroundImageProps, Box, Center, Text } from '@tidbcloud/uikit'

type Story = StoryObj<typeof BackgroundImage>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof BackgroundImage> = {
  title: 'Primitive/BackgroundImage',
  component: BackgroundImage,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Wrapper(props: BackgroundImageProps) {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        radius="md"
      >
        <Center p="md">
          <Text color="#fff">
            BackgroundImage component can be used to add any content on image. It is useful for hero headers and other
            similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: Wrapper
}
