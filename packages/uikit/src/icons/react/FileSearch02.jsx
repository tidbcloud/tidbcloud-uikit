import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileSearch02 = (props, ref) => {
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
        d="M9.33329 7.33325H5.33329M6.66663 9.99992H5.33329M10.6666 4.66659H5.33329M13.3333 6.99992V4.53325C13.3333 3.41315 13.3333 2.85309 13.1153 2.42527C12.9236 2.04895 12.6176 1.74299 12.2413 1.55124C11.8135 1.33325 11.2534 1.33325 10.1333 1.33325H5.86663C4.74652 1.33325 4.18647 1.33325 3.75865 1.55124C3.38232 1.74299 3.07636 2.04895 2.88461 2.42527C2.66663 2.85309 2.66663 3.41315 2.66663 4.53325V11.4666C2.66663 12.5867 2.66663 13.1467 2.88461 13.5746C3.07636 13.9509 3.38232 14.2569 3.75865 14.4486C4.18647 14.6666 4.74652 14.6666 5.86663 14.6666H7.66663M14.6666 14.6666L13.6666 13.6666M14.3333 11.9999C14.3333 13.2886 13.2886 14.3333 12 14.3333C10.7113 14.3333 9.66663 13.2886 9.66663 11.9999C9.66663 10.7113 10.7113 9.66659 12 9.66659C13.2886 9.66659 14.3333 10.7113 14.3333 11.9999Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileSearch02)
const FileSearch02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileSearch02', props.className].join(' ')}
    />
  )
})
FileSearch02.displayName = 'IconFileSearch02'
export default FileSearch02
