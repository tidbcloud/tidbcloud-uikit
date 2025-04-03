import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThumbsDown = (props, ref) => {
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
        d="M11.3335 1.33325V8.66659M14.6669 6.53325V3.46659C14.6669 2.71985 14.6669 2.34648 14.5215 2.06126C14.3937 1.81038 14.1897 1.60641 13.9389 1.47858C13.6536 1.33325 13.2803 1.33325 12.5335 1.33325H5.41221C4.43788 1.33325 3.95072 1.33325 3.55725 1.51154C3.21046 1.66868 2.91573 1.92153 2.70769 2.2404C2.47164 2.60218 2.39757 3.08368 2.24942 4.04667L1.9007 6.31333C1.70529 7.58346 1.60759 8.21852 1.79607 8.71267C1.96149 9.14638 2.27263 9.50905 2.67615 9.7385C3.13589 9.99992 3.77842 9.99992 5.06349 9.99992H5.6002C5.97357 9.99992 6.16025 9.99992 6.30286 10.0726C6.4283 10.1365 6.53029 10.2385 6.5942 10.3639C6.66686 10.5065 6.66686 10.6932 6.66686 11.0666V13.0227C6.66686 13.9306 7.40286 14.6666 8.31076 14.6666C8.52731 14.6666 8.72354 14.5391 8.81149 14.3412L11.052 9.30004C11.1539 9.07075 11.2049 8.95611 11.2854 8.87204C11.3566 8.79774 11.444 8.74092 11.5408 8.70604C11.6504 8.66659 11.7758 8.66659 12.0267 8.66659H12.5335C13.2803 8.66659 13.6536 8.66659 13.9389 8.52126C14.1897 8.39343 14.3937 8.18946 14.5215 7.93857C14.6669 7.65336 14.6669 7.27999 14.6669 6.53325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThumbsDown)
const ThumbsDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ThumbsDown', props.className].join(' ')}
    />
  )
})
ThumbsDown.displayName = 'IconThumbsDown'
export default ThumbsDown
