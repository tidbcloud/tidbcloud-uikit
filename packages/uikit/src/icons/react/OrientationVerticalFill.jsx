import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOrientationVerticalFill = (props, ref) => {
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
      <path d="M4 13H8V20H4V13ZM10 9H14V20H10V9ZM16 4H20V20H16V4Z" strokeWidth="inherit" stroke="currentColor" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconOrientationVerticalFill)
const OrientationVerticalFill = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'OrientationVerticalFill'].join(' ')}
    />
  )
})
OrientationVerticalFill.displayName = 'IconOrientationVerticalFill'
export default OrientationVerticalFill
