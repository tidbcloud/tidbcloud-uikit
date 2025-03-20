import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlarmClockOff = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 5.142a8 8 0 0 1 9.358 9.358m-1.722 3.634A8 8 0 1 1 6.862 6.869M4 4 2 6m20 0-3-3M6 19l-2 2m17 0L3 3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlarmClockOff)
const AlarmClockOff = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlarmClockOff'].join(' ')}
    />
  )
})
AlarmClockOff.displayName = 'IconAlarmClockOff'
export default AlarmClockOff
