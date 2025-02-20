import _dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import minMax from 'dayjs/plugin/minMax'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

_dayjs.extend(duration)
_dayjs.extend(minMax)
_dayjs.extend(customParseFormat)
_dayjs.extend(utc)
_dayjs.extend(timezone)

export const dayjs = _dayjs
export type { Dayjs } from 'dayjs'
