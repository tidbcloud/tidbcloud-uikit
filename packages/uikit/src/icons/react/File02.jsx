import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFile02 = (props, ref) => {
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
        d="M9.33329 7.33325H5.33329M6.66663 9.99992H5.33329M10.6666 4.66659H5.33329M13.3333 4.53325V11.4666C13.3333 12.5867 13.3333 13.1467 13.1153 13.5746C12.9236 13.9509 12.6176 14.2569 12.2413 14.4486C11.8134 14.6666 11.2534 14.6666 10.1333 14.6666H5.86663C4.74652 14.6666 4.18647 14.6666 3.75864 14.4486C3.38232 14.2569 3.07636 13.9509 2.88461 13.5746C2.66663 13.1467 2.66663 12.5867 2.66663 11.4666V4.53325C2.66663 3.41315 2.66663 2.85309 2.88461 2.42527C3.07636 2.04895 3.38232 1.74299 3.75864 1.55124C4.18647 1.33325 4.74652 1.33325 5.86663 1.33325H10.1333C11.2534 1.33325 11.8134 1.33325 12.2413 1.55124C12.6176 1.74299 12.9236 2.04895 13.1153 2.42527C13.3333 2.85309 13.3333 3.41315 13.3333 4.53325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFile02)
const File02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'File02', props.className].join(' ')}
    />
  )
})
File02.displayName = 'IconFile02'
export default File02
