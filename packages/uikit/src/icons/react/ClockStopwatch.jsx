import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockStopwatch = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 6.3335V9.00016L9.66683 10.0002M8.00016 3.3335C4.87055 3.3335 2.3335 5.87055 2.3335 9.00016C2.3335 12.1298 4.87055 14.6668 8.00016 14.6668C11.1298 14.6668 13.6668 12.1298 13.6668 9.00016C13.6668 5.87055 11.1298 3.3335 8.00016 3.3335ZM8.00016 3.3335V1.3335M6.66683 1.3335H9.3335M13.5528 3.72819L12.5528 2.72819L13.0528 3.22819M2.44751 3.72819L3.44751 2.72819L2.94751 3.22819"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClockStopwatch)
const ClockStopwatch = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ClockStopwatch', props.className].join(' ')}
    />
  )
})
ClockStopwatch.displayName = 'IconClockStopwatch'
export default ClockStopwatch
