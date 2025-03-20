import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockPlus = (props, ref) => {
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
        d="M21.92 13.265Q22 12.643 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.653 0 1.285-.082M12 6v6l3.738 1.87M19 22v-6m-3 3h6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClockPlus)
const ClockPlus = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ClockPlus'].join(' ')}
    />
  )
})
ClockPlus.displayName = 'IconClockPlus'
export default ClockPlus
