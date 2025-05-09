import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFile04 = (props, ref) => {
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
        d="M9.33329 1.51289V4.26659C9.33329 4.63995 9.33329 4.82664 9.40595 4.96925C9.46987 5.09469 9.57186 5.19667 9.6973 5.26059C9.83991 5.33325 10.0266 5.33325 10.4 5.33325H13.1537M13.3333 6.65874V11.4666C13.3333 12.5867 13.3333 13.1467 13.1153 13.5746C12.9236 13.9509 12.6176 14.2569 12.2413 14.4486C11.8134 14.6666 11.2534 14.6666 10.1333 14.6666H5.86663C4.74652 14.6666 4.18647 14.6666 3.75864 14.4486C3.38232 14.2569 3.07636 13.9509 2.88461 13.5746C2.66663 13.1467 2.66663 12.5867 2.66663 11.4666V4.53325C2.66663 3.41315 2.66663 2.85309 2.88461 2.42527C3.07636 2.04895 3.38232 1.74299 3.75864 1.55124C4.18647 1.33325 4.74652 1.33325 5.86663 1.33325H8.00781C8.49699 1.33325 8.74158 1.33325 8.97176 1.38851C9.17583 1.43751 9.37092 1.51831 9.54986 1.62797C9.7517 1.75166 9.92465 1.92461 10.2706 2.27051L12.396 4.39599C12.7419 4.7419 12.9149 4.91485 13.0386 5.11668C13.1482 5.29563 13.229 5.49072 13.278 5.69479C13.3333 5.92496 13.3333 6.16955 13.3333 6.65874Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFile04)
const File04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'File04', props.className].join(' ')}
    />
  )
})
File04.displayName = 'IconFile04'
export default File04
