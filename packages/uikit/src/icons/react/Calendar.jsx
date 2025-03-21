import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCalendar = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M13 6.66671H1M9.66667 1.33337V4.00004M4.33333 1.33337V4.00004M4.2 14.6667H9.8C10.9201 14.6667 11.4802 14.6667 11.908 14.4487C12.2843 14.257 12.5903 13.951 12.782 13.5747C13 13.1469 13 12.5868 13 11.4667V5.86671C13 4.7466 13 4.18655 12.782 3.75873C12.5903 3.3824 12.2843 3.07644 11.908 2.88469C11.4802 2.66671 10.9201 2.66671 9.8 2.66671H4.2C3.0799 2.66671 2.51984 2.66671 2.09202 2.88469C1.71569 3.07644 1.40973 3.3824 1.21799 3.75873C1 4.18655 1 4.7466 1 5.86671V11.4667C1 12.5868 1 13.1469 1.21799 13.5747C1.40973 13.951 1.71569 14.257 2.09202 14.4487C2.51984 14.6667 3.0799 14.6667 4.2 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCalendar)
const Calendar = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Calendar'].join(' ')}
    />
  )
})
Calendar.displayName = 'IconCalendar'
export default Calendar
