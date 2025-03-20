import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBezierCurve01 = (props, ref) => {
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
        d="M10 7H3m18 0h-7m0 .252c3.45.888 6 4.02 6 7.748M4 15c0-3.728 2.55-6.86 6-7.748M3.6 19h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 18.24 6 17.96 6 17.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 15 4.96 15 4.4 15h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 15.76 2 16.04 2 16.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 19 3.04 19 3.6 19m8-10h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 8.24 14 7.96 14 7.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 5 12.96 5 12.4 5h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 5.76 10 6.04 10 6.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 9 11.04 9 11.6 9m8 10h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 18.24 22 17.96 22 17.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 15 20.96 15 20.4 15h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C18 15.76 18 16.04 18 16.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C18.76 19 19.04 19 19.6 19M22 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBezierCurve01)
const BezierCurve01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BezierCurve01'].join(' ')}
    />
  )
})
BezierCurve01.displayName = 'IconBezierCurve01'
export default BezierCurve01
