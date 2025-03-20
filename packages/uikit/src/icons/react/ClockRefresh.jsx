import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockRefresh = (props, ref) => {
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
        d="M20.453 12.893A8.5 8.5 0 0 1 4.638 16.25l-.25-.433m-.842-4.71A8.5 8.5 0 0 1 19.361 7.75l.25.433M3.493 18.066l.732-2.732 2.732.732m10.085-8.132 2.732.732.732-2.732M12 7.5V12l2.5 1.5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClockRefresh)
const ClockRefresh = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ClockRefresh'].join(' ')}
    />
  )
})
ClockRefresh.displayName = 'IconClockRefresh'
export default ClockRefresh
