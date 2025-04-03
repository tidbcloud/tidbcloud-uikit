import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockSnooze = (props, ref) => {
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
        d="M11.0002 11.3335H14.3335L11.0002 14.6668H14.3335M14.6339 8.66683C14.6557 8.44756 14.6668 8.22516 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668C8.11194 14.6668 8.22307 14.6641 8.3335 14.6586C8.44535 14.6531 8.55649 14.6449 8.66683 14.6339M8.00016 4.00016V8.00016L10.4924 9.24629"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClockSnooze)
const ClockSnooze = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ClockSnooze', props.className].join(' ')}
    />
  )
})
ClockSnooze.displayName = 'IconClockSnooze'
export default ClockSnooze
