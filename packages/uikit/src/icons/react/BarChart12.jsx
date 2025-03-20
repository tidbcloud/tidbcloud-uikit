import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChart12 = (props, ref) => {
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
        d="M9 12H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 12.76 3 13.04 3 13.6v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H9m0 0h6m-6 0V8.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 7 10.04 7 10.6 7h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 7.76 15 8.04 15 8.6V21m0 0h4.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 3 19.96 3 19.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 3.76 15 4.04 15 4.6V8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChart12)
const BarChart12 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BarChart12'].join(' ')}
    />
  )
})
BarChart12.displayName = 'IconBarChart12'
export default BarChart12
