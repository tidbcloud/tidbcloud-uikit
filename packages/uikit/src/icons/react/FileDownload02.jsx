import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileDownload02 = (props, ref) => {
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
        d="M13.3333 8.33325V4.53325C13.3333 3.41315 13.3333 2.85309 13.1153 2.42527C12.9236 2.04895 12.6176 1.74299 12.2413 1.55124C11.8134 1.33325 11.2534 1.33325 10.1333 1.33325H5.86663C4.74652 1.33325 4.18647 1.33325 3.75864 1.55124C3.38232 1.74299 3.07636 2.04895 2.88461 2.42527C2.66663 2.85309 2.66663 3.41315 2.66663 4.53325V11.4666C2.66663 12.5867 2.66663 13.1467 2.88461 13.5746C3.07636 13.9509 3.38232 14.2569 3.75864 14.4486C4.18647 14.6666 4.74649 14.6666 5.86653 14.6666H8.33329M9.33329 7.33325H5.33329M6.66663 9.99992H5.33329M10.6666 4.66659H5.33329M9.99996 12.6666L12 14.6666M12 14.6666L14 12.6666M12 14.6666V10.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileDownload02)
const FileDownload02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileDownload02', props.className].join(' ')}
    />
  )
})
FileDownload02.displayName = 'IconFileDownload02'
export default FileDownload02
