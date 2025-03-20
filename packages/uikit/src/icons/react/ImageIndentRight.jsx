import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageIndentRight = (props, ref) => {
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
        d="M21 4H3m18 16H3M9 9.25H3m6 5.5H3M14.6 16h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 15.24 21 14.96 21 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 8 19.96 8 19.4 8h-4.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C13 8.76 13 9.04 13 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 16 14.04 16 14.6 16"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageIndentRight)
const ImageIndentRight = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ImageIndentRight'].join(' ')}
    />
  )
})
ImageIndentRight.displayName = 'IconImageIndentRight'
export default ImageIndentRight
