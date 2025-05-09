import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlarmClockOff = (props, ref) => {
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
        d="M7.00004 3.4279C7.32735 3.36542 7.66204 3.33333 8.00004 3.33333C9.41453 3.33333 10.7711 3.89524 11.7713 4.89543C12.7715 5.89562 13.3334 7.25218 13.3334 8.66667C13.3334 9.00467 13.3013 9.33936 13.2388 9.66667M12.0904 12.0892C11.9896 12.2096 11.8832 12.326 11.7713 12.4379C10.7711 13.4381 9.41453 14 8.00004 14C6.58555 14 5.229 13.4381 4.2288 12.4379C3.22861 11.4377 2.66671 10.0812 2.66671 8.66667C2.66671 7.25218 3.22861 5.89562 4.2288 4.89543C4.33969 4.78454 4.45496 4.67905 4.5742 4.5791M2.66671 2.66667L1.33337 4M14.6667 4L12.6667 2M4.00004 12.6667L2.66671 14M14 14L2.00004 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'AlarmClockOff', props.className].join(' ')}
    />
  )
})
AlarmClockOff.displayName = 'IconAlarmClockOff'
export default AlarmClockOff
