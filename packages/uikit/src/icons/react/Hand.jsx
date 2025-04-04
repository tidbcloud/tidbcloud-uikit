import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHand = (props, ref) => {
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
        d="M6.9 11.444v2.778m0-2.778V4.778c0-.92.761-1.667 1.7-1.667s1.7.746 1.7 1.667m-3.4 6.666c0-.92-.761-1.666-1.7-1.666s-1.7.746-1.7 1.666v2.223C3.5 18.269 7.306 22 12 22s8.5-3.731 8.5-8.333V8.11c0-.92-.761-1.667-1.7-1.667s-1.7.747-1.7 1.667m-6.8-3.333v6.11m0-6.11V3.667C10.3 2.747 11.061 2 12 2s1.7.746 1.7 1.667v1.11m0 0v6.112m0-6.111c0-.92.761-1.667 1.7-1.667s1.7.746 1.7 1.667V8.11m0 0v2.778"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHand)
const Hand = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Hand.displayName = 'IconHand'
export default Hand
