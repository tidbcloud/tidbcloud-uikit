import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerLeftDown = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 4h-3.4c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C8 8.56 8 10.24 8 13.6V20m0 0 5-5m-5 5-5-5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerLeftDown)
const CornerLeftDown = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CornerLeftDown'].join(' ')}
    />
  )
})
CornerLeftDown.displayName = 'IconCornerLeftDown'
export default CornerLeftDown
