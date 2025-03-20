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
      <path d="M4 13h4v7H4zM10 9h4v11h-4zM16 4h4v16h-4z" strokeWidth="inherit" stroke="currentColor" />
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
