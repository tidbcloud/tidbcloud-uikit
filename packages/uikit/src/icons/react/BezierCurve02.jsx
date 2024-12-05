import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBezierCurve02 = (props, ref) => {
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
        d="M10 20.263A8.51 8.51 0 0 1 3.737 14m16.527 0A8.51 8.51 0 0 1 14 20.263m0-16.526A8.51 8.51 0 0 1 20.264 10M3.737 10A8.51 8.51 0 0 1 10 3.737M3.6 14h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 13.24 6 12.96 6 12.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 10 4.96 10 4.4 10h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 10.76 2 11.04 2 11.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 14 3.04 14 3.6 14m16 0h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 13.24 22 12.96 22 12.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 10 20.96 10 20.4 10h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C18 10.76 18 11.04 18 11.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C18.76 14 19.04 14 19.6 14m-8-8h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 5.24 14 4.96 14 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 2 12.96 2 12.4 2h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 2.76 10 3.04 10 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 6 11.04 6 11.6 6m0 16h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 21.24 14 20.96 14 20.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 18 12.96 18 12.4 18h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 18.76 10 19.04 10 19.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 22 11.04 22 11.6 22"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBezierCurve02)
const BezierCurve02 = forwardRef((props, ref) => {
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
BezierCurve02.displayName = 'IconBezierCurve02'
export default BezierCurve02
