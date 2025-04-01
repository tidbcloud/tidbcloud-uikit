import 'dayjs/locale/zh'

import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AbsoluteTimeRange, RelativeTimeRange, TimeRangePicker, TimeRangePickerProps } from '@tidbcloud/uikit/biz'
import { dayjs } from '@tidbcloud/uikit/utils'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useState } from 'react'

dayjs.extend(duration)
dayjs.extend(relativeTime)

function TimeRangePickerWrapper(props: TimeRangePickerProps) {
  const [tr, setTr] = useState(props.value)

  return <TimeRangePicker {...props} value={tr!} onChange={setTr} />
}

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

export const Clearable: Story = {
  args: {
    value: undefined,
    quickRanges: [
      5 * 60, // 5 mins
      15 * 60,
      30 * 60,
      60 * 60,
      3 * 60 * 60,
      6 * 60 * 60,
      12 * 60 * 60
    ],
    clearable: true
  }
}

export const FutureRelativeRange: Story = {
  args: {
    value: { type: 'relative', value: 30 * 60, isFuture: true },
    quickRanges: [
      {
        value: 5 * 60,
        isFuture: true
      },
      {
        value: 15 * 60,
        isFuture: true
      },
      {
        value: 30 * 60,
        isFuture: true
      }
    ]
  }
}

export const Internationalization: Story = {
  args: {
    value: { type: 'relative', value: 30 * 60, isFuture: true },
    quickRanges: [
      {
        value: 5 * 60,
        label: '未来 5 分钟',
        isFuture: true
      },
      {
        value: 15 * 60,
        label: '未来 15 分钟',
        isFuture: true
      },
      {
        value: 30 * 60,
        label: '未来 30 分钟',
        isFuture: true
      }
    ],
    dateInputFormat: (date: Date) => dayjs(date).format('YYYY-MM-DD'),
    datePickerProps: { locale: 'zh' },
    localization: {
      entry: '自定义',
      back: '返回',
      start: '开始时间',
      end: '结束时间',
      apply: '应用',
      cancel: '取消',
      errors: {
        startAfterEnd: '请选择结束时间在开始时间之后',
        beyondMin: (min: Date) => `请选择开始时间在 ${dayjs(min).format('YYYY-MM-DD HH:mm')} 之后`,
        beyondMax: (max: Date) => `请选择结束时间在 ${dayjs(max).format('YYYY-MM-DD HH:mm')} 之前`,
        beyondDuration: (duration: number) => `选择的时间范围超过 ${duration} 秒的限制，请选择更短的时间范围`
      }
    },
    relativeFormatter: (range: RelativeTimeRange) => {
      return `${range.isFuture ? '未来' : '过去'} ${dayjs
        .duration(range.value * 1000)
        .locale('zh')
        .humanize()}`
    },
    absoluteFormatter: (range: AbsoluteTimeRange) => {
      return `${dayjs.unix(range.value[0]).format('YYYY-MM-DD HH:mm')} - ${dayjs.unix(range.value[1]).format('YYYY-MM-DD HH:mm')}`
    }
  }
}
