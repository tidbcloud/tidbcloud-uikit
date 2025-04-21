import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClock = (props, ref) => {
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
        d="M8.00004 4.00016V8.00016L10.6667 9.3335M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00004 14.6668C4.31814 14.6668 1.33337 11.6821 1.33337 8.00016C1.33337 4.31826 4.31814 1.3335 8.00004 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClock)
const Clock = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Clock', props.className].join(' ')}
    />
  )
})
Clock.displayName = 'IconClock'
export default Clock
