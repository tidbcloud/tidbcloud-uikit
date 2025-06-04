import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileShield02 = (props, ref) => {
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
        d="M9.33341 7.33325H5.33341M6.66675 9.99992H5.33341M10.6667 4.66659H5.33341M13.3334 6.66659V4.53325C13.3334 3.41315 13.3334 2.85309 13.1154 2.42527C12.9237 2.04895 12.6177 1.74299 12.2414 1.55124C11.8136 1.33325 11.2535 1.33325 10.1334 1.33325H5.86675C4.74664 1.33325 4.18659 1.33325 3.75877 1.55124C3.38244 1.74299 3.07648 2.04895 2.88473 2.42527C2.66675 2.85309 2.66675 3.41315 2.66675 4.53325V11.4666C2.66675 12.5867 2.66675 13.1467 2.88473 13.5746C3.07648 13.9509 3.38244 14.2569 3.75877 14.4486C4.18659 14.6666 4.74664 14.6666 5.86675 14.6666H8.33341M12.0001 13.9999C12.0001 13.9999 14.0001 13.0466 14.0001 11.6167V9.94851L12.5417 9.42739C12.1913 9.30187 11.8081 9.30187 11.4577 9.42739L10.0001 9.94851V11.6167C10.0001 13.0466 12.0001 13.9999 12.0001 13.9999Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileShield02)
const FileShield02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileShield02', props.className].join(' ')}
    />
  )
})
FileShield02.displayName = 'IconFileShield02'
export default FileShield02
