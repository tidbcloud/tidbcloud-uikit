import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlarmClock = (props, ref) => {
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
        d="M3.33337 2L1.33337 4M14.6667 4L12.6667 2M4.00004 12.6667L2.66671 14M12 12.6667L13.3334 14M8.00004 6V8.66667L9.33337 10M8.00004 14C9.41453 14 10.7711 13.4381 11.7713 12.4379C12.7715 11.4377 13.3334 10.0812 13.3334 8.66667C13.3334 7.25218 12.7715 5.89562 11.7713 4.89543C10.7711 3.89524 9.41453 3.33333 8.00004 3.33333C6.58555 3.33333 5.229 3.89524 4.2288 4.89543C3.22861 5.89562 2.66671 7.25218 2.66671 8.66667C2.66671 10.0812 3.22861 11.4377 4.2288 12.4379C5.229 13.4381 6.58555 14 8.00004 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlarmClock)
const AlarmClock = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlarmClock', props.className].join(' ')}
    />
  )
})
AlarmClock.displayName = 'IconAlarmClock'
export default AlarmClock
