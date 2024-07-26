import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { TimeRangePicker } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof TimeRangePicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TimeRangePicker> = {
  title: 'Biz/TimeRangePicker',
  component: TimeRangePicker,
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
    value: { type: 'absolute', value: [1721713862, 1721973002] }
  }
}

{
  /* <TimeRangePicker
value={timeRange}
onChange={(v) => {
  setFilters(toURLTimeRange(v))
  eventTracking('Slow Query Time Range Change', { timeRange: v })
}}
loading={isLoading || isFetching}
quickRanges={slowQueryQuickRanges}
minDateTime={() =>
  dayjs()
    .subtract(SLOW_QUERY_QUICK_RANGES[SLOW_QUERY_QUICK_RANGES.length - 1], 'seconds')
    .toDate()
}
maxDateTime={() => dayjs().toDate()}
/> */
}
