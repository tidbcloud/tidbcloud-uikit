import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFilm01 = (props, ref) => {
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
        d="M1.33325 7.99992H14.6666M1.33325 4.66659H4.66659M11.3333 4.66659H14.6666M1.33325 11.3333H4.66659M11.3333 11.3333H14.6666M4.66659 14.6666V1.33325M11.3333 14.6666V1.33325M4.53325 14.6666H11.4666C12.5867 14.6666 13.1467 14.6666 13.5746 14.4486C13.9509 14.2569 14.2569 13.9509 14.4486 13.5746C14.6666 13.1467 14.6666 12.5867 14.6666 11.4666V4.53325C14.6666 3.41315 14.6666 2.85309 14.4486 2.42527C14.2569 2.04895 13.9509 1.74299 13.5746 1.55124C13.1467 1.33325 12.5867 1.33325 11.4666 1.33325H4.53325C3.41315 1.33325 2.85309 1.33325 2.42527 1.55124C2.04895 1.74299 1.74299 2.04895 1.55124 2.42527C1.33325 2.85309 1.33325 3.41315 1.33325 4.53325V11.4666C1.33325 12.5867 1.33325 13.1467 1.55124 13.5746C1.74299 13.9509 2.04895 14.2569 2.42527 14.4486C2.85309 14.6666 3.41315 14.6666 4.53325 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFilm01)
const Film01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Film01', props.className].join(' ')}
    />
  )
})
Film01.displayName = 'IconFilm01'
export default Film01
