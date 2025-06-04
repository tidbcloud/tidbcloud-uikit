import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileShield03 = (props, ref) => {
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
        d="M9.33341 1.33325H5.86675C4.74664 1.33325 4.18659 1.33325 3.75877 1.55124C3.38244 1.74299 3.07648 2.04895 2.88473 2.42527C2.66675 2.85309 2.66675 3.41315 2.66675 4.53325V11.4666C2.66675 12.5867 2.66675 13.1467 2.88473 13.5746C3.07648 13.9509 3.38244 14.2569 3.75877 14.4486C4.18659 14.6666 4.74664 14.6666 5.86675 14.6666H10.1334C11.2535 14.6666 11.8136 14.6666 12.2414 14.4486C12.6177 14.2569 12.9237 13.9509 13.1154 13.5746C13.3334 13.1467 13.3334 12.5867 13.3334 11.4666V5.33325M9.33341 1.33325L13.3334 5.33325M9.33341 1.33325V5.33325H13.3334M8.00008 11.9999C8.00008 11.9999 10.0001 11.0466 10.0001 9.61674V7.94851L8.54168 7.42739C8.19128 7.30187 7.80808 7.30187 7.45768 7.42739L6.00008 7.94851V9.61674C6.00008 11.0466 8.00008 11.9999 8.00008 11.9999Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileShield03)
const FileShield03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileShield03', props.className].join(' ')}
    />
  )
})
FileShield03.displayName = 'IconFileShield03'
export default FileShield03
