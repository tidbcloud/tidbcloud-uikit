import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBezierCurve03 = (props, ref) => {
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
        d="M10.857 7 5.143 17M6 19h12m.857-2L13.143 7M3.6 21h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 20.24 6 19.96 6 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 17 4.96 17 4.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 17.76 2 18.04 2 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 21 3.04 21 3.6 21m16 0h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.24 22 19.96 22 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 17 20.96 17 20.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C18 17.76 18 18.04 18 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C18.76 21 19.04 21 19.6 21m-8-14h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 6.24 14 5.96 14 5.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 3 12.96 3 12.4 3h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 3.76 10 4.04 10 4.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 7 11.04 7 11.6 7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBezierCurve03)
const BezierCurve03 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
BezierCurve03.displayName = 'IconBezierCurve03'
export default BezierCurve03
