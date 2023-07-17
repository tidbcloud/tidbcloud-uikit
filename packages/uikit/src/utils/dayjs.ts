import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import minMax from 'dayjs/plugin/minMax'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(duration)
dayjs.extend(minMax)
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

export { dayjs }

export type { Dayjs } from 'dayjs'
