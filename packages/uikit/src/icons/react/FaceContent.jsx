import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFaceContent = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.33337 9.33337C5.33337 9.33337 6.33337 10.6667 8.00004 10.6667C9.66671 10.6667 10.6667 9.33337 10.6667 9.33337M11.3334 6.16004C11.07 6.48337 10.71 6.66671 10.3334 6.66671C9.95671 6.66671 9.60671 6.48337 9.33337 6.16004M6.66671 6.16004C6.40337 6.48337 6.04337 6.66671 5.66671 6.66671C5.29004 6.66671 4.94004 6.48337 4.66671 6.16004M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFaceContent)
const FaceContent = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FaceContent', props.className].join(' ')}
    />
  )
})
FaceContent.displayName = 'IconFaceContent'
export default FaceContent
