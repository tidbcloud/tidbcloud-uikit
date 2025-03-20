import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Checkbox, Divider, Group, NumberInput, Stack, Tooltip } from '@tidbcloud/uikit'
import { IconActivity } from '@tidbcloud/uikit/icons'
import * as allIcons from '@tidbcloud/uikit/icons'
import { useState } from 'react'

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

function Demo({ size, withScalingStroke }: { size?: number; withScalingStroke?: boolean }) {
  return (
    <Group>
      {iconsData.map((name) => {
        // @ts-ignore
        const IconComp = allIcons[name]
        return (
          <Tooltip label={name}>
            <IconComp
              size={size}
              sx={{
                '& *': {
                  'vector-effect': withScalingStroke ? 'none' : 'non-scaling-stroke'
                }
              }}
            />
          </Tooltip>
        )
      })}
    </Group>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const AllIcons: Story = {
  render: () => {
    const [size, setSize] = useState(24)
    const [withScalingStroke, setWithScalingStroke] = useState(true)
    return (
      <Stack>
        <Stack>
          <NumberInput label="Icon Size" value={size} onChange={(value) => setSize(Number(value))} maw={200} />
          <Checkbox
            label="With Scaling Stroke"
            description={
              <div>
                Default is true, the icon stroke will scale with the size, see{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect">MDN for more info</a>
                , change icon size and toggle this to see the difference.
              </div>
            }
            checked={withScalingStroke}
            onChange={(e) => setWithScalingStroke(e.target.checked)}
          />
        </Stack>

        <Divider />

        <Demo size={size} withScalingStroke={withScalingStroke} />
      </Stack>
    )
  },
  args: {}
}
