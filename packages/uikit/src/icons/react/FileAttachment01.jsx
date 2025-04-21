import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileAttachment01 = (props, ref) => {
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
        d="M4 6.66659V2.99992C4 2.44763 4.44772 1.99992 5 1.99992C5.55228 1.99992 6 2.44763 6 2.99992V6.66659C6 7.77115 5.10457 8.66659 4 8.66659C2.89543 8.66659 2 7.77116 2 6.66659V3.99992M8.33333 1.33325H10.1333C11.2534 1.33325 11.8135 1.33325 12.2413 1.55124C12.6176 1.74299 12.9236 2.04895 13.1153 2.42527C13.3333 2.85309 13.3333 3.41315 13.3333 4.53325V11.4666C13.3333 12.5867 13.3333 13.1467 13.1153 13.5746C12.9236 13.9509 12.6176 14.2569 12.2413 14.4486C11.8135 14.6666 11.2534 14.6666 10.1333 14.6666H5.86667C4.74656 14.6666 4.18651 14.6666 3.75869 14.4486C3.38236 14.2569 3.0764 13.9509 2.88465 13.5746C2.66667 13.1467 2.66667 12.5867 2.66667 11.4666V10.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'FileAttachment01', props.className].join(' ')}
    />
  )
})
FileAttachment01.displayName = 'IconFileAttachment01'
export default FileAttachment01
