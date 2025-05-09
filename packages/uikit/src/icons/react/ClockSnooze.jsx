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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M10.9999 11.3335H14.3333L10.9999 14.6668H14.3333M14.6337 8.66683C14.6554 8.44756 14.6666 8.22516 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668C8.11169 14.6668 8.22283 14.6641 8.33325 14.6586C8.44511 14.6531 8.55624 14.6449 8.66659 14.6339M7.99992 4.00016V8.00016L10.4922 9.24629"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
