import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TimeRangePicker, TimeRangePickerProps } from '@tidbcloud/uikit/biz'
import { dayjs } from '@tidbcloud/uikit/utils'
import { useState } from 'react'

function TimeRangePickerWrapper(props: TimeRangePickerProps) {
  const [tr, setTr] = useState(props.value)

  return <TimeRangePicker {...props} value={tr} onChange={setTr} />
}

type Story = StoryObj<typeof TimeRangePicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em', minHeight: '300px' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TimeRangePicker> = {
  title: 'Biz/TimeRangePicker',
  component: TimeRangePickerWrapper,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Basic: Story = {
  args: {
    value: { type: 'relative', value: 30 * 60 }
  }
}

export const Primary: Story = {
  args: {
    value: { type: 'absolute', value: [1721713862, 1721973002] },
    onChange(value) {
      console.log('new value:', value)
    },
    quickRanges: [
      5 * 60, // 5 mins
      15 * 60,
      30 * 60,
      60 * 60,
      3 * 60 * 60,
      6 * 60 * 60,
      12 * 60 * 60
    ],
    minDateTime() {
      return dayjs.unix(1721713862).subtract(4, 'd').startOf('d').toDate()
    },
    maxDateTime() {
      return dayjs.unix(1721973002).endOf('d').toDate()
    },
    maxDuration: 60 * 60 * 24 * 4
  }
}
