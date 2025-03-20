import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOrientationHorizontalFill = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M11 4V8L4 8 4 4 11 4ZM15 10V14H4L4 10 15 10ZM20 16V20H4L4 16H20Z"
        strokeWidth="inherit"
        stroke="currentColor"
      />
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
      className={[props.className, 'tiui-icon', 'OrientationHorizontalFill'].join(' ')}
    />
  )
})
OrientationHorizontalFill.displayName = 'IconOrientationHorizontalFill'
export default OrientationHorizontalFill
