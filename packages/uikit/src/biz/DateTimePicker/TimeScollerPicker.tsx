import { createStyles } from '@mantine/emotion'
import { useMemoizedFn } from 'ahooks'
import type { Dayjs } from 'dayjs'
import { padStart, range } from 'lodash-es'
import { useRef, useMemo, useEffect } from 'react'

import { useUncontrolled } from '../../hooks/index.js'
import { Box, Flex, ScrollArea } from '../../primitive/index.js'
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

const getTimeRange = ({
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
  onChange?: (v: number) => void
}

type Range = Pick<Options, 'max' | 'min'>

const default2DigitRender = (val: number) => padStart(String(val), 2, '0')

function TimePickerScrollerColumn({
  min,
  max,
  curr,
  render = default2DigitRender,
  onChange,
  name,
  currentValueChangedBy
}: {
  min: number
  max: number
  curr: number
  render?: (val: number) => React.ReactNode
  onChange?: (v: number) => void

  /**
   * for debugging only
   */
  name?: string
  currentValueChangedBy: CurrentValueChangedBy | null
}) {
  const { classes, cx: clsx } = useStyles()
  const ref = useRef<HTMLDivElement>(null)
  const numbers = useMemo(() => range(min, max + 1), [min, max])
  const timeoutRef = useRef<number>()
  const isArtificialScroll = useRef(false)

  const [val, setVal] = useUncontrolled({
    value: curr,
    onChange
  })

  const adjustScrollTop = useMemoizedFn((value: number) => {
    // skip adjust if it is from user scroll
    if (currentValueChangedBy === 'timeScroller') return

    const i = numbers.findIndex((i) => i === value)

    if (i !== -1 && ref.current) {
      isArtificialScroll.current = true
      ref.current.scrollTop = i * CellHeight

      window.requestAnimationFrame(() => {
        setTimeout(() => {
          isArtificialScroll.current = false
        }, 100)
      })
    }
  })

  const onScroll = useMemoizedFn((position: { x: number; y: number }) => {
    if (isArtificialScroll.current) return
    if (currentValueChangedBy) return

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

  const handleClickCell = useMemoizedFn((e: React.MouseEvent<HTMLDivElement>, i: number) => {
    e.stopPropagation()
    e.preventDefault()
    ref.current?.scrollTo({ top: i * CellHeight, behavior: 'smooth' })
  })

  useEffect(() => {
    adjustScrollTop(val)
  }, [val])

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
}

export type CurrentValueChangedBy = 'calendar' | 'timeInput' | 'timeScroller'

export function TimeScollerPicker({
  currentValue,
  currentValueChangedBy,
  start,
  end,
  utcOffset,
  onChange
}: {
  currentValue: Dayjs
  currentValueChangedBy: CurrentValueChangedBy | null
  start?: Date
  end?: Date
  utcOffset?: number
  onChange?: (v: [number, number, number]) => void
}) {
  const options = useMemo(
    () => ({
      hour: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'hour' }),
      minute: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'minute' }),
      second: getTimeRange({ curr: currentValue, start, end, utcOffset, type: 'second' })
    }),
    [currentValue, start, end, utcOffset]
  )
  const hourValue = useMemo(() => {
    return typeof utcOffset === 'number' ? currentValue.utcOffset(utcOffset).hour() : currentValue.hour()
  }, [currentValue, utcOffset])
  const minuteValue = useMemo(() => {
    return typeof utcOffset === 'number' ? currentValue.utcOffset(utcOffset).minute() : currentValue.minute()
  }, [currentValue, utcOffset])
  const secondValue = useMemo(() => {
    return typeof utcOffset === 'number' ? currentValue.utcOffset(utcOffset).second() : currentValue.second()
  }, [currentValue, utcOffset])
  const onHourChange = useMemoizedFn((v: number) => {
    onChange?.([v, minuteValue, secondValue])
  })
  const onMinuteChange = useMemoizedFn((v: number) => {
    onChange?.([hourValue, v, secondValue])
  })
  const onSecondChange = useMemoizedFn((v: number) => {
    onChange?.([hourValue, minuteValue, v])
  })

  return (
    <Flex mah="100%" gap={8}>
      <TimePickerScrollerColumn
        name="hour"
        min={options.hour.min}
        max={options.hour.max}
        curr={hourValue}
        onChange={onHourChange}
        currentValueChangedBy={currentValueChangedBy}
      />
      <TimePickerScrollerColumn
        name="minute"
        min={options.minute.min}
        max={options.minute.max}
        curr={minuteValue}
        onChange={onMinuteChange}
        currentValueChangedBy={currentValueChangedBy}
      />
      <TimePickerScrollerColumn
        name="second"
        min={options.second.min}
        max={options.second.max}
        curr={secondValue}
        onChange={onSecondChange}
        currentValueChangedBy={currentValueChangedBy}
      />
    </Flex>
  )
}
