import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFilm03 = (props, ref) => {
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
        d="M4.66659 1.33325V3.99992M4.66659 10.6666V13.3333M11.3333 2.66659V5.33325M11.3333 11.9999V14.6666M1.33325 3.99992H7.99992M1.33325 10.6666H7.99992M7.99992 5.33325H14.6666M7.99992 11.9999H14.6666M7.99992 13.3333V2.39992C7.99992 2.02655 7.99992 1.83987 7.92726 1.69726C7.86334 1.57182 7.76135 1.46983 7.63591 1.40591C7.4933 1.33325 7.30662 1.33325 6.93325 1.33325H4.53325C3.41315 1.33325 2.85309 1.33325 2.42527 1.55124C2.04895 1.74299 1.74299 2.04895 1.55124 2.42527C1.33325 2.85309 1.33325 3.41315 1.33325 4.53325V10.1333C1.33325 11.2534 1.33325 11.8134 1.55124 12.2412C1.74299 12.6176 2.04895 12.9235 2.42527 13.1153C2.85309 13.3333 3.41315 13.3333 4.53325 13.3333H7.99992ZM7.99992 2.66659H11.4666C12.5867 2.66659 13.1467 2.66659 13.5746 2.88457C13.9509 3.07632 14.2569 3.38228 14.4486 3.7586C14.6666 4.18643 14.6666 4.74648 14.6666 5.86659V11.4666C14.6666 12.5867 14.6666 13.1467 14.4486 13.5746C14.2569 13.9509 13.9509 14.2569 13.5746 14.4486C13.1467 14.6666 12.5867 14.6666 11.4666 14.6666H9.06659C8.69322 14.6666 8.50653 14.6666 8.36392 14.5939C8.23848 14.53 8.1365 14.428 8.07258 14.3026C7.99992 14.16 7.99992 13.9733 7.99992 13.5999V2.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFilm03)
const Film03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Film03', props.className].join(' ')}
    />
  )
})
Film03.displayName = 'IconFilm03'
export default Film03
