import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Checkbox, Divider, Group, NumberInput, Select, Stack, Tooltip } from '@tidbcloud/uikit'
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

function Demo({
  size,
  withScalingStroke,
  strokeWidth
}: {
  size?: number
  withScalingStroke?: boolean
  strokeWidth?: 'default' | '1.5' | '2'
}) {
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
                  'vector-effect': withScalingStroke ? 'none' : 'non-scaling-stroke',
                  ...(strokeWidth !== 'default' && {
                    'stroke-width': strokeWidth
                  })
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
    const [strokeWidth, setStrokeWidth] = useState<'default' | '1.5' | '2'>('default')
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
          <Select
            label="Stroke Width"
            value={strokeWidth}
            data={[
              { label: 'raw svg', value: 'default' },
              { label: '1.5', value: '1.5' },
              { label: '2', value: '2' }
            ]}
            onChange={(value) => setStrokeWidth(value as 'default' | '1.5' | '2')}
            maw={120}
          />
        </Stack>

        <Divider />

        <Demo size={size} withScalingStroke={withScalingStroke} strokeWidth={strokeWidth} />
      </Stack>
    )
  },
  args: {}
}
