import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlarmClockCheck = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2M9 13.5l2 2 4.5-4.5M12 21a8 8 0 1 0 0-16.001A8 8 0 0 0 12 21"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlarmClockCheck)
const AlarmClockCheck = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlarmClockCheck'].join(' ')}
    />
  )
})
AlarmClockCheck.displayName = 'IconAlarmClockCheck'
export default AlarmClockCheck
