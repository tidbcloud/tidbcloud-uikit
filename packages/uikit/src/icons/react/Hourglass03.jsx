import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHourglass03 = (props, ref) => {
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
        d="M9 18.5h6M6.6 2h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C19 2.76 19 3.04 19 3.6v2.075c0 .489 0 .733-.055.963q-.075.309-.24.579c-.123.201-.296.374-.642.72L15.13 10.87c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l2.932 2.932c.346.346.519.519.642.72q.165.271.24.578c.055.23.055.475.055.965V20.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C18.24 22 17.96 22 17.4 22H6.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C5 21.24 5 20.96 5 20.4v-2.074c0-.49 0-.734.055-.965q.075-.308.24-.578c.123-.201.296-.374.642-.72L8.87 13.13c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822L5.937 7.937c-.346-.346-.519-.519-.642-.72a2 2 0 0 1-.24-.579C5 6.408 5 6.164 5 5.675V3.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C5.76 2 6.04 2 6.6 2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHourglass03)
const Hourglass03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Hourglass03'].join(' ')}
    />
  )
})
Hourglass03.displayName = 'IconHourglass03'
export default Hourglass03
