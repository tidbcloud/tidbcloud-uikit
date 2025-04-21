import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockRefresh = (props, ref) => {
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
        d="M13.6355 8.59538C13.4503 10.3353 12.4644 11.9658 10.8331 12.9076C8.12275 14.4724 4.65707 13.5438 3.09226 10.8335L2.92559 10.5448M2.36407 7.40491C2.54927 5.66498 3.53513 4.0345 5.16646 3.09265C7.87678 1.52785 11.3425 2.45647 12.9073 5.1668L13.0739 5.45547M2.32874 12.0441L2.81677 10.2227L4.63814 10.7108M11.3614 5.28948L13.1828 5.77752L13.6708 3.95615M7.99979 5.00013V8.00013L9.66646 9.00013"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'ClockRefresh', props.className].join(' ')}
    />
  )
})
ClockRefresh.displayName = 'IconClockRefresh'
export default ClockRefresh
