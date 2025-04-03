import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFilm02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 14.6666V1.33325M4.66683 14.6666V11.3333M4.66683 4.66659V1.33325M11.3335 14.6666V11.3333M11.3335 4.66659V1.33325M1.3335 4.66659H14.6668M1.3335 11.3333H14.6668M14.6668 11.4666V4.53325C14.6668 3.41315 14.6668 2.85309 14.4488 2.42527C14.2571 2.04895 13.9511 1.74299 13.5748 1.55124C13.147 1.33325 12.5869 1.33325 11.4668 1.33325L4.5335 1.33325C3.41339 1.33325 2.85334 1.33325 2.42551 1.55124C2.04919 1.74299 1.74323 2.04895 1.55148 2.42527C1.3335 2.85309 1.3335 3.41315 1.3335 4.53325L1.3335 11.4666C1.3335 12.5867 1.3335 13.1467 1.55148 13.5746C1.74323 13.9509 2.04919 14.2569 2.42552 14.4486C2.85334 14.6666 3.41339 14.6666 4.5335 14.6666H11.4668C12.5869 14.6666 13.147 14.6666 13.5748 14.4486C13.9511 14.2569 14.2571 13.9509 14.4488 13.5746C14.6668 13.1467 14.6668 12.5867 14.6668 11.4666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFilm02)
const Film02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Film02', props.className].join(' ')}
    />
  )
})
Film02.displayName = 'IconFilm02'
export default Film02
