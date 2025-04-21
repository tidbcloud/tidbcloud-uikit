import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCalendarHeart02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14 6.66683H2M14 7.66683V5.86683C14 4.74672 14 4.18667 13.782 3.75885C13.5903 3.38252 13.2843 3.07656 12.908 2.88482C12.4802 2.66683 11.9201 2.66683 10.8 2.66683H5.2C4.0799 2.66683 3.51984 2.66683 3.09202 2.88482C2.71569 3.07656 2.40973 3.38252 2.21799 3.75885C2 4.18667 2 4.74672 2 5.86683V11.4668C2 12.5869 2 13.147 2.21799 13.5748C2.40973 13.9511 2.71569 14.2571 3.09202 14.4488C3.51984 14.6668 4.0799 14.6668 5.2 14.6668H8.33333M10.6667 1.3335V4.00016M5.33333 1.3335V4.00016M11.6651 10.4748C11.1986 9.95536 10.4206 9.81564 9.8361 10.2913C9.25158 10.7669 9.16929 11.5622 9.62831 12.1247C10.0873 12.6872 11.6651 14.0002 11.6651 14.0002C11.6651 14.0002 13.2428 12.6872 13.7018 12.1247C14.1608 11.5622 14.0886 10.7619 13.494 10.2913C12.8995 9.82064 12.1316 9.95536 11.6651 10.4748Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCalendarHeart02)
const CalendarHeart02 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'CalendarHeart02', props.className].join(' ')}
    />
  )
})
CalendarHeart02.displayName = 'IconCalendarHeart02'
export default CalendarHeart02
