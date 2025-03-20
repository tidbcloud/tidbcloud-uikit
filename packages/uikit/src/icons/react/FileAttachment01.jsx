import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileAttachment01 = (props, ref) => {
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
        d="M6 10V4.5a1.5 1.5 0 1 1 3 0V10a3 3 0 1 1-6 0V6m9.5-4h2.7c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2v-.7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileAttachment01)
const FileAttachment01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FileAttachment01'].join(' ')}
    />
  )
})
FileAttachment01.displayName = 'IconFileAttachment01'
export default FileAttachment01
