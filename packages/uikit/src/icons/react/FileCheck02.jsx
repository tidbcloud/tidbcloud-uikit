import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileCheck02 = (props, ref) => {
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
        d="M13.3333 8.3335V4.5335C13.3333 3.41339 13.3333 2.85334 13.1153 2.42552C12.9236 2.04919 12.6176 1.74323 12.2413 1.55148C11.8134 1.3335 11.2534 1.3335 10.1333 1.3335H5.86663C4.74652 1.3335 4.18647 1.3335 3.75864 1.55148C3.38232 1.74323 3.07636 2.04919 2.88461 2.42552C2.66663 2.85334 2.66663 3.41339 2.66663 4.5335V11.4668C2.66663 12.5869 2.66663 13.147 2.88461 13.5748C3.07636 13.9511 3.38232 14.2571 3.75864 14.4488C4.18647 14.6668 4.74652 14.6668 5.86663 14.6668H7.99996M9.33329 7.3335H5.33329M6.66663 10.0002H5.33329M10.6666 4.66683H5.33329M9.66663 12.6668L11 14.0002L14 11.0002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileCheck02)
const FileCheck02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileCheck02', props.className].join(' ')}
    />
  )
})
FileCheck02.displayName = 'IconFileCheck02'
export default FileCheck02
