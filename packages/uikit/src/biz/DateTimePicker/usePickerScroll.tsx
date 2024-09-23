import { clsx } from '@mantine/styles'
import { useMemoizedFn } from 'ahooks'
import type { Dayjs } from 'dayjs'
import { padStart, range } from 'lodash-es'
import { useRef, useMemo, useState, useEffect } from 'react'

import { Box, createStyles, ScrollArea } from '../../primitive/index.js'
import { dayjs } from '../../utils/dayjs.js'

import { CellHeight, CellStyle } from './constant.js'

const useStyles = createStyles(() => ({
  bold: {
    fontWeight: 600
  },
  cell: {
    textAlign: 'center',
    cursor: 'pointer',
    scrollSnapAlign: 'start',
    userSelect: 'none'
  },
  cellPlaceholder: {
    visibility: 'hidden'
  }
}))

export const getTimeRange = ({
  curr,
  type,
  start,
  end,
  utcOffset = dayjs().utcOffset()
}: {
  curr: Dayjs
  type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
  start?: Date
  end?: Date
  utcOffset?: number
}): Range => {
  const map = {
    year: {
      min: dayjs().year(),
      max: dayjs().year() + 100
    },
    month: {
      min: 1,
      max: 12
    },
    day: {
      min: 1,
      max: curr.daysInMonth()
    },
    hour: {
      min: 0,
      max: 23
    },
    minute: {
      min: 0,
      max: 59
    },
    second: {
      min: 0,
      max: 59
    }
  }

  let { min, max } = map[type]
  const s1 = start ? dayjs(start).utcOffset(utcOffset) : null
  const s2 = end ? dayjs(end).utcOffset(utcOffset) : null

  switch (type) {
    case 'year': {
      if (s1) {
        min = s1.year()
      }
      if (s2) {
        max = s2.year()
      }
      break
    }
    case 'month': {
      if (s1 && curr.isSame(s1, 'year')) {
        min = s1.month() + 1 // should be 1-12 here
      }
      if (s2 && curr.isSame(s2, 'year')) {
        max = s2.month() + 1
      }
      break
    }
    case 'day': {
      if (s1 && curr.isSame(s1, 'month')) {
        min = s1.date() // 1-31
      }
      if (s2 && curr.isSame(s2, 'month')) {
        max = s2.date()
      }
      break
    }
    case 'hour': {
      if (s1 && curr.isSame(s1, 'day')) {
        min = s1.hour()
      }
      if (s2 && curr.isSame(s2, 'day')) {
        max = s2.hour()
      }
      break
    }
    case 'minute': {
      if (s1 && curr.isSame(s1, 'hour')) {
        min = s1.minute()
      }
      if (s2 && curr.isSame(s2, 'hour')) {
        max = s2.minute()
      }
      break
    }
    case 'second': {
      if (s1 && curr.isSame(s1, 'minute')) {
        min = s1.second()
      }
      if (s2 && curr.isSame(s2, 'minute')) {
        max = s2.second()
      }
      break
    }
    default: {
      const exhaustiveCheck = 'should not reach here' as any as never
      throw new Error(exhaustiveCheck)
    }
  }

  return { min, max }
}

interface Options {
  max: number
  min: number

  /**
   * always use real value, not 0-indexed value
   */
  curr: number
  open: boolean
  render?: (val: number) => any
  title?: string
}

type Range = Pick<Options, 'max' | 'min'>

const usePickerScrollColumn = ({ min, max, curr, open, render }: Options) => {
  const { classes } = useStyles()
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number>()
  const [val, setVal] = useState(curr)
  const handleClickCell = useMemoizedFn((e: React.MouseEvent<HTMLDivElement>, i: number) => {
    e.stopPropagation()
    e.preventDefault()
    ref.current?.scrollTo({ top: i * CellHeight, behavior: 'smooth' })
  })
  const onScroll = useMemoizedFn((position: { x: number; y: number }) => {
    clearTimeout(timeoutRef.current)

    const i = position.y / CellHeight
    if (i === Math.floor(i)) {
      const val = i >= numbers.length ? numbers.at(-1) : numbers[i]
      if (typeof val !== 'undefined') {
        setVal(val)
      }
    } else {
      timeoutRef.current = window.setTimeout(() => {
        const k = Math.round(i)
        const val = k >= numbers.length ? numbers.at(-1) : numbers[k]
        if (typeof val !== 'undefined') {
          setVal(val)
        }
      }, 300)
    }
  })

  const numbers = useMemo(() => range(min, max + 1), [min, max])
  const content = useMemo(() => {
    return (
      <ScrollArea
        viewportRef={ref}
        type="never"
        styles={{
          viewport: {
            scrollSnapPointsY: `repeat(${CellHeight}px)`,
            scrollSnapType: 'y mandatory'
          }
        }}
        onScrollPositionChange={onScroll}
      >
        {numbers.map((i, index) => (
          <div
            key={i}
            className={clsx(classes.cell, i === curr && classes.bold)}
            onClick={(e) => handleClickCell(e, index)}
            style={CellStyle}
          >
            {render ? render(i) : i}
          </div>
        ))}

        {/* cellPlaceholder */}
        {range(6).map((i) => (
          <Box key={i} className={clsx(classes.cell, classes.cellPlaceholder)} style={CellStyle} />
        ))}
      </ScrollArea>
    )
  }, [numbers, handleClickCell, onScroll, curr, render, classes])

  const adjustScrollTop = useMemoizedFn(() => {
    const i = numbers.findIndex((i) => i === val)
    if (i !== -1 && open) {
      const s = i * CellHeight
      ref.current?.scrollTo({ top: s, behavior: 'auto' })
    }
  })

  useEffect(() => {
    requestIdleCallback(() => {
      adjustScrollTop()
    })
  }, [open, val, adjustScrollTop])

  useEffect(() => {
    if (numbers.findIndex((i) => i === curr) > -1) {
      setVal(curr)
    }
  }, [curr, numbers])

  return {
    value: val,
    content
  }
}

const default2DigitRender = (val: number) => padStart(String(val), 2, '0')

export const useDatePickerScroll = (
  currentValue: Dayjs,
  open: boolean,
  start?: Date,
  end?: Date,
  utcOffset?: number
) => {
  const options = useMemo(
    () => ({
      year: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'year' }),
      month: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'month' }),
      date: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'day' })
    }),
    [currentValue, start, end, utcOffset]
  )
  const currWithOffset =
    typeof utcOffset !== 'undefined' ? currentValue.utcOffset(utcOffset ?? currentValue.utcOffset()) : currentValue
  const year = usePickerScrollColumn({
    ...options.year,
    open,
    curr: currWithOffset.year()
  })
  const month = usePickerScrollColumn({
    ...options.month,
    curr: currWithOffset.month() + 1,
    open,
    render: default2DigitRender
  })
  const date = usePickerScrollColumn({
    ...options.date,
    curr: currWithOffset.date(),
    open,
    render: default2DigitRender
  })

  const content = useMemo(
    () => (
      <>
        {year.content}
        {month.content}
        {date.content}
      </>
    ),
    [year.content, month.content, date.content]
  )

  // `month.value` is real value here, not 0-indexed value
  const value = useMemo(() => [year.value, month.value - 1, date.value] as const, [year.value, month.value, date.value])

  return {
    content,
    value
  }
}

export const useTimePickerScroll = (
  currentValue: Dayjs,
  open: boolean,
  start?: Date,
  end?: Date,
  utcOffset?: number
) => {
  const options = useMemo(
    () => ({
      hour: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'hour' }),
      minute: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'minute' }),
      second: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'second' })
    }),
    [currentValue, start, end, utcOffset]
  )

  const hour = usePickerScrollColumn({
    ...options.hour,
    curr:
      typeof utcOffset !== 'undefined'
        ? currentValue.utcOffset(utcOffset ?? currentValue.utcOffset()).hour()
        : currentValue.hour(),
    open,
    render: default2DigitRender,
    title: 'hour'
  })
  const minute = usePickerScrollColumn({
    ...options.minute,
    curr: currentValue.minute(),
    open,
    render: default2DigitRender,
    title: 'minute'
  })
  const second = usePickerScrollColumn({
    ...options.second,
    curr: currentValue.second(),
    open,
    render: default2DigitRender,
    title: 'second'
  })

  const content = useMemo(
    () => (
      <>
        {hour.content}
        {minute.content}
        {second.content}
      </>
    ),
    [hour.content, minute.content, second.content]
  )

  const value = useMemo(
    () => [hour.value, minute.value, second.value] as const,
    [hour.value, minute.value, second.value]
  )

  return {
    content,
    value
  }
}
