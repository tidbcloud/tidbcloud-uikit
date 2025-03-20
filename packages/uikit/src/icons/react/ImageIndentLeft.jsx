import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageIndentLeft = (props, ref) => {
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
        d="M21 9.25h-6M21 4H3m18 10.75h-6M21 20H3m1.6-4h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C11 15.24 11 14.96 11 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C10.24 8 9.96 8 9.4 8H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 8.76 3 9.04 3 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 16 4.04 16 4.6 16"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageIndentLeft)
const ImageIndentLeft = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ImageIndentLeft'].join(' ')}
    />
  )
})
ImageIndentLeft.displayName = 'IconImageIndentLeft'
export default ImageIndentLeft
