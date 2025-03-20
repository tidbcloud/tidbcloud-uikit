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
      <path d="M11 4v4H4V4zM15 10v4H4v-4zM20 16v4H4v-4z" strokeWidth="inherit" stroke="currentColor" />
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
