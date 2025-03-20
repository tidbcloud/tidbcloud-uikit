import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBrush03 = (props, ref) => {
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
        d="M20 10V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.24 2 18.96 2 18.4 2H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 2.76 4 3.04 4 3.6V10m16 0H4m16 0v.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 15 16.88 15 15.2 15H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 12.72 4 11.88 4 10.2V10m10.5 5v4.5a2.5 2.5 0 0 1-5 0V15"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBrush03)
const Brush03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Brush03'].join(' ')}
    />
  )
})
Brush03.displayName = 'IconBrush03'
export default Brush03
