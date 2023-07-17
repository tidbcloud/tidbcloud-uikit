import dayjs from 'dayjs'

export type TimeRange = RelativeTimeRange | AbsoluteTimeRange

export interface RelativeTimeRange {
  type: 'relative'
  // unit: seconds
  value: number
}

export interface AbsoluteTimeRange {
  type: 'absolute'
  // unit: seconds
  value: TimeRangeValue
}

export type TimeRangeValue = [from: number, to: number]

export const DEFAULT_QUICK_RANGES = [
  3 * 24 * 60 * 60,
  2 * 24 * 60 * 60,
  24 * 60 * 60,
  12 * 60 * 60,
  3 * 60 * 60,
  60 * 60,
  30 * 60,
  15 * 60,
  5 * 60
]

export const DEFAULT_TIME_RANGE: TimeRange = {
  type: 'relative',
  value: 30 * 60
}

const FORMAT_TOKENS: { [k: string]: { unit: Intl.RelativeTimeFormatUnit; fnName: string } } = {
  s: {
    unit: 'second',
    fnName: 'asSeconds'
  },
  m: {
    unit: 'minute',
    fnName: 'asMinutes'
  },
  h: {
    unit: 'hour',
    fnName: 'asHours'
  },
  d: {
    unit: 'day',
    fnName: 'asDays'
  },
  mo: {
    unit: 'month',
    fnName: 'asMonth'
  }
}

export const formatDuration = (seconds: number, short = false) => {
  let token = 's'
  if (seconds >= 30 * 24 * 60 * 60) {
    token = 'mo'
  } else if (seconds >= 24 * 60 * 60) {
    token = 'd'
  } else if (seconds >= 60 * 60) {
    token = 'h'
  } else if (seconds >= 60) {
    token = 'm'
  }

  const durationLength = Math.ceil(dayjs.duration(seconds, 'seconds')[FORMAT_TOKENS[token].fnName]())

  if (short) {
    return `${durationLength}${token}`
  }

  return `${durationLength}${formatUnit(durationLength, FORMAT_TOKENS[token].unit)}`
}

const formatUnit = (seconds: number, unit: Intl.RelativeTimeFormatUnit) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'always' })
  const parts = rtf.formatToParts(seconds, unit)
  return parts[parts.length - 1].value
}

export const toTimeRangeValue = (timeRange: TimeRange, offset = 0): TimeRangeValue => {
  if (timeRange.type === 'absolute') {
    return timeRange.value.map((t) => t + offset) as TimeRangeValue
  } else {
    const now = dayjs().unix()
    return [now - timeRange.value + offset, now + offset]
  }
}

export type URLTimeRange = { from: string; to: string }

export const toURLTimeRange = (timeRange: TimeRange): URLTimeRange => {
  if (timeRange.type === 'relative') {
    return { from: `${timeRange.value}`, to: 'now' }
  }

  const timeRangeValue = toTimeRangeValue(timeRange)
  return { from: `${timeRangeValue[0]}`, to: `${timeRangeValue[1]}` }
}

export const urlToTimeRange = (urlTimeRange: URLTimeRange): TimeRange => {
  if (urlTimeRange.to === 'now') {
    return { type: 'relative', value: Number(urlTimeRange.from) }
  }
  return { type: 'absolute', value: [Number(urlTimeRange.from), Number(urlTimeRange.to)] }
}

export const urlToTimeRangeValue = (urlTimeRange: URLTimeRange): TimeRangeValue => {
  return toTimeRangeValue(urlToTimeRange(urlTimeRange))
}
