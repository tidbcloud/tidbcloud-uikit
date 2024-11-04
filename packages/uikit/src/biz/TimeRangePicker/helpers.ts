import { trim } from 'lodash-es'
import prettyMs from 'pretty-ms'

import { dayjs } from '../../utils/dayjs.js'

export type TimeRange = RelativeTimeRange | AbsoluteTimeRange

export interface RelativeTimeRange {
  type: 'relative'
  value: number // unit: seconds
}

export interface AbsoluteTimeRange {
  type: 'absolute'
  value: TimeRangeValue // unit: seconds
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

export const formatDuration = (seconds: number, short = false) => {
  if (short) {
    return prettyMs(seconds * 1000, { compact: true })
  } else {
    return prettyMs(seconds * 1000, { verbose: true })
  }
}

export const toTimeRangeValue = (timeRange: TimeRange, offset = 0): TimeRangeValue => {
  if (timeRange.type === 'absolute') {
    return timeRange.value.map((t) => t + offset) as TimeRangeValue
  } else {
    const now = dayjs().unix()
    return [now - timeRange.value + offset, now + offset]
  }
}

export function fromTimeRangeValue(v: TimeRangeValue): AbsoluteTimeRange {
  return {
    type: 'absolute',
    value: [...v]
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

//----------

export const DEFAULT_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export const DEFAULT_TIME_FORMAT_WITH_TIMEZONE = 'YYYY-MM-DD HH:mm:ss Z'

// add utcOffset for date time
export function addOffsetUTC(time: string | number | Date, utcOffset: number) {
  const targetTime = new Date(time)

  // Get the timezone offset from local time in minutes
  const tzDifference = utcOffset * 60 + targetTime.getTimezoneOffset()
  // Convert the offset to milliseconds, add to targetTime, and make a new Date
  return new Date(targetTime.getTime() + tzDifference * 60 * 1000)
}

// display UTC offset
// number: -9, 7, 0, 8.5
export const getUTCString = (offset: number) => {
  const offsetStrs = offset.toString().split('.')

  let mm = '00'
  let hh = ''

  const offsetH = Number.parseInt(offsetStrs[0] || '0')
  const offsetM = Number.parseFloat(`0.${offsetStrs[1]}` || '0') * 60

  hh = Math.abs(offsetH).toString().padStart(2, '0')
  mm = offsetM === 0 ? '00' : offsetM.toString()

  if (offset > 0) {
    return `UTC+${hh}:${mm}`
  }
  if (offset < 0) {
    return `UTC-${hh}:${mm}`
  }

  return 'UTC±00:00'
}

export const timeFormatter = (
  timeValue: number | string | Date,
  utcOffset?: number | null,
  format = DEFAULT_TIME_FORMAT
) => {
  // null, undefined, 0, ''
  if (!timeValue) return '-'
  // convert unix timestamp number/string(seconds) to milliseconds
  // time schema in billing services is unix timestamp string, such as: { time: "1602201600" }
  const time = timeValue instanceof Date || isNaN(Number(timeValue)) ? timeValue : Number(timeValue) * 1000
  // use a localized timezone of the user agent(browser) if utcOffset is unavailable
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
  const currentTZOffsetInHours =
    utcOffset === undefined || utcOffset === null ? -(new Date().getTimezoneOffset() / 60) : utcOffset
  const withUTC = format.indexOf('Z') >= 0 // display UTC offset

  // use a specific timezone with utcOffset
  // use customized UTC offset display format, like Dec 14, 2021 08:03 UTC+08:00
  return (
    dayjs(addOffsetUTC(time, currentTZOffsetInHours)).format(withUTC ? trim(format, 'Z') : format) +
    (withUTC ? getUTCString(currentTZOffsetInHours) : '')
  )
}
