import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUpload04 = (props, ref) => {
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
        d="m16 12-4-4m0 0-4 4m4-4v9.2c0 1.39 0 2.086.55 2.865.366.517 1.42 1.155 2.047 1.24.945.128 1.304-.059 2.022-.433A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 5 8.662"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUpload04)
const Upload04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Upload04'].join(' ')}
    />
  )
})
Upload04.displayName = 'IconUpload04'
export default Upload04
