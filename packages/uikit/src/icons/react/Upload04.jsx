import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUpload04 = (props, ref) => {
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
        d="M10.6666 8.00004L7.99998 5.33337M7.99998 5.33337L5.33331 8.00004M7.99998 5.33337V11.4667C7.99998 12.3938 7.99998 12.8574 8.36699 13.3764C8.61084 13.7213 9.31293 14.1469 9.73146 14.2036C10.3614 14.289 10.6006 14.1642 11.079 13.9146C13.2111 12.8024 14.6666 10.5712 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 10.4676 2.67398 12.6221 4.66665 13.7748"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Upload04', props.className].join(' ')}
    />
  )
})
Upload04.displayName = 'IconUpload04'
export default Upload04
