import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageUserRight = (props, ref) => {
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
        d="m19 8 3-3m0 0-3-3m3 3h-6m6 7v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 22 18.88 22 17.2 22H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 2 5.12 2 6.8 2H12M2.146 19.926A4 4 0 0 1 6 17h7c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.077.386.077.85.077 1.78M14 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageUserRight)
const ImageUserRight = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ImageUserRight'].join(' ')}
    />
  )
})
ImageUserRight.displayName = 'IconImageUserRight'
export default ImageUserRight
