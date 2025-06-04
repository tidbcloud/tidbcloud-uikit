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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M11.3333 1.33325V8.66659M14.6666 6.53325V3.46659C14.6666 2.71985 14.6666 2.34648 14.5213 2.06126C14.3935 1.81038 14.1895 1.60641 13.9386 1.47858C13.6534 1.33325 13.28 1.33325 12.5333 1.33325H5.41196C4.43764 1.33325 3.95048 1.33325 3.55701 1.51154C3.21022 1.66868 2.91549 1.92153 2.70745 2.2404C2.4714 2.60218 2.39732 3.08368 2.24917 4.04667L1.90045 6.31333C1.70505 7.58346 1.60735 8.21852 1.79582 8.71267C1.96125 9.14638 2.27239 9.50905 2.6759 9.7385C3.13564 9.99992 3.77818 9.99992 5.06324 9.99992H5.59995C5.97332 9.99992 6.16001 9.99992 6.30261 10.0726C6.42806 10.1365 6.53004 10.2385 6.59396 10.3639C6.66662 10.5065 6.66662 10.6932 6.66662 11.0666V13.0227C6.66662 13.9306 7.40262 14.6666 8.31051 14.6666C8.52706 14.6666 8.7233 14.5391 8.81125 14.3412L11.0518 9.30004C11.1537 9.07075 11.2046 8.95611 11.2852 8.87204C11.3563 8.79774 11.4438 8.74092 11.5406 8.70604C11.6501 8.66659 11.7756 8.66659 12.0265 8.66659H12.5333C13.28 8.66659 13.6534 8.66659 13.9386 8.52126C14.1895 8.39343 14.3935 8.18946 14.5213 7.93857C14.6666 7.65336 14.6666 7.27999 14.6666 6.53325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
