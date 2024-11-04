import type { Meta, StoryFn } from '@storybook/react'
import { ActionIcon, VisuallyHidden } from '@tidbcloud/uikit'
import { IconHeart } from '@tidbcloud/uikit/icons'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Primitive/Misc/VisuallyHidden',
  component: VisuallyHidden,
  decorators: [decorator],
  parameters: {}
}

export default meta

export function Primary() {
  return (
    <ActionIcon>
      <IconHeart />
      <VisuallyHidden>Like post</VisuallyHidden>
    </ActionIcon>
  )
}
