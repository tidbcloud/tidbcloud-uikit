import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Text, Timeline } from '@tidbcloud/uikit'
import { IconLink03, IconList, IconAlertCircle, IconDotsHorizontal } from '@tidbcloud/uikit/icons'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Timeline>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Timeline> = {
  title: 'Primitive/Data display/Timeline',
  component: Timeline,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Timeline {...rest}>
      <Timeline.Item bullet={<IconLink03 size={12} />} title="New branch">
        <Text color="dimmed" size="sm">
          You&apos;ve created new branch{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{' '}
          from master
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconList size={12} />} title="Commits">
        <Text color="dimmed" size="sm">
          You&apos;ve pushed 23 commits to
          <Text variant="link" component="span" inherit>
            fix-notifications branch
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          52 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconAlertCircle size={12} />} lineVariant="dashed">
        <Text color="dimmed" size="sm">
          You&apos;ve submitted a pull request
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconDotsHorizontal size={12} />}>
        <Text color="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{' '}
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
    </Timeline>
  ),
  args: {
    active: 0,
    lineWidth: 2,
    reverseActive: false
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: { type: 'select' }
    },
    align: {
      options: ['left', 'right'],
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
    }
  }
}
