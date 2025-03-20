import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZoomOut = (props, ref) => {
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
        d="m21 21-4.35-4.35M8 11h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZoomOut)
const ZoomOut = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ZoomOut'].join(' ')}
    />
  )
})
ZoomOut.displayName = 'IconZoomOut'
export default ZoomOut
