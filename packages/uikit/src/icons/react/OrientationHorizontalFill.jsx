import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOrientationHorizontalFill = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path d="M11 4V8L4 8L4 4L11 4Z" strokeWidth="inherit" stroke="currentColor" />
      <path d="M15 10V14H4L4 10L15 10Z" strokeWidth="inherit" stroke="currentColor" />
      <path d="M20 16V20H4L4 16H20Z" strokeWidth="inherit" stroke="currentColor" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconOrientationHorizontalFill)
const OrientationHorizontalFill = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'OrientationHorizontalFill', props.className].join(' ')}
    />
  )
})
OrientationHorizontalFill.displayName = 'IconOrientationHorizontalFill'
export default OrientationHorizontalFill
