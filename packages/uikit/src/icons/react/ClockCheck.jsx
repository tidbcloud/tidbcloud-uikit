import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockCheck = (props, ref) => {
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
        d="M9.66671 12.6668L11 14.0002L14 11.0002M14.6568 8.36675C14.6634 8.24539 14.6667 8.12316 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8.00004 1.3335C4.31814 1.3335 1.33337 4.31826 1.33337 8.00016C1.33337 11.6238 4.22438 14.5721 7.8257 14.6646M8.00004 4.00016V8.00016L10.4923 9.24629"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClockCheck)
const ClockCheck = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ClockCheck', props.className].join(' ')}
    />
  )
})
ClockCheck.displayName = 'IconClockCheck'
export default ClockCheck
