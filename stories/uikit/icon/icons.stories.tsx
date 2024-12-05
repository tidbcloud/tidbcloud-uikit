import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, Tooltip } from '@tidbcloud/uikit'
import { IconActivity } from '@tidbcloud/uikit/icons'
import * as allIcons from '@tidbcloud/uikit/icons'

const iconsData = Object.keys(allIcons).filter((i) => i !== 'Icon')

type Story = StoryObj<typeof IconActivity>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof IconActivity> = {
  title: 'Icons/Icon',
  component: IconActivity,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Icon({ name }: { name: string }) {
  // @ts-ignore
  const IconComp = allIcons[name]
  return (
    <Tooltip label={name}>
      <IconComp size={24} />
    </Tooltip>
  )
}

function Demo() {
  return (
    <Group>
      {iconsData.map((name) => (
        <Icon name={name} />
      ))}
    </Group>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo></Demo>,
  args: {}
}
