import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconScissorsCut02 = (props, ref) => {
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
        d="M4.5 8.6 21 17m0-10L4.5 15.4m13-3.4h.01M22 12h.01M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconScissorsCut02)
const ScissorsCut02 = forwardRef((props, ref) => {
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
ScissorsCut02.displayName = 'IconScissorsCut02'
export default ScissorsCut02
