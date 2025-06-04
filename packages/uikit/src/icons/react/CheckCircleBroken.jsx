import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCheckCircleBroken = (props, ref) => {
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
        d="M14.6667 7.39052V8.00386C14.6659 9.44147 14.2003 10.8403 13.3396 11.9917C12.4788 13.1432 11.2689 13.9855 9.89024 14.3931C8.51162 14.8007 7.03818 14.7518 5.68965 14.2536C4.34112 13.7554 3.18977 12.8346 2.40731 11.6286C1.62485 10.4225 1.2532 8.9959 1.34779 7.5614C1.44238 6.1269 1.99814 4.76141 2.93219 3.66857C3.86624 2.57574 5.12853 1.81411 6.5308 1.49729C7.93306 1.18046 9.40018 1.32541 10.7133 1.91052M14.6667 2.66671L8 9.34004L6 7.34004"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckCircleBroken)
const CheckCircleBroken = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CheckCircleBroken', props.className].join(' ')}
    />
  )
})
CheckCircleBroken.displayName = 'IconCheckCircleBroken'
export default CheckCircleBroken
