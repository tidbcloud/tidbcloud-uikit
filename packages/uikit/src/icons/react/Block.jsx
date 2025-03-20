import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBlock = (props, ref) => {
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
        strokeWidth={1.5}
        d="M13.5 6.47c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.109.494-.109 1.054-.109h4.8c.56 0 .84 0 1.054.11a1 1 0 0 1 .437.436c.109.214.109.494.109 1.054v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.11-.494.11-1.054.11h-4.8c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.437C13.5 10.11 13.5 9.83 13.5 9.27zM2.5 6.47c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.26 4.87 3.54 4.87 4.1 4.87h4.8c.56 0 .84 0 1.054.11a1 1 0 0 1 .437.436c.109.214.109.494.109 1.054v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.11-.494.11-1.054.11H4.1c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.437C2.5 10.11 2.5 9.83 2.5 9.27zM2.5 15.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.26 14 3.54 14 4.1 14h4.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C9.74 20 9.46 20 8.9 20H4.1c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C2.5 19.24 2.5 18.96 2.5 18.4zM13.48 15.614c0-.56 0-.84.11-1.054a1 1 0 0 1 .436-.437c.214-.109.494-.109 1.054-.109h4.8c.56 0 .84 0 1.054.11a1 1 0 0 1 .437.436c.11.214.11.494.11 1.054v2.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.437.437c-.214.11-.494.11-1.054.11h-4.8c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.437c-.109-.213-.109-.494-.109-1.054z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBlock)
const Block = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Block'].join(' ')}
    />
  )
})
Block.displayName = 'IconBlock'
export default Block
