import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMouse = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 5.99992V3.99992M8.00016 14.6666C5.42283 14.6666 3.3335 12.5772 3.3335 9.99992V5.99992C3.3335 3.42259 5.42283 1.33325 8.00016 1.33325C10.5775 1.33325 12.6668 3.42259 12.6668 5.99992V9.99992C12.6668 12.5772 10.5775 14.6666 8.00016 14.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMouse)
const Mouse = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Mouse', props.className].join(' ')}
    />
  )
})
Mouse.displayName = 'IconMouse'
export default Mouse
