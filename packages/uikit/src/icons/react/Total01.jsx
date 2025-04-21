import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTotal01 = (props, ref) => {
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
        d="M10.7999 4.00002H5.2C4.0799 4.00002 3.51984 4.00002 3.09202 4.21553C2.71569 4.40509 2.40973 4.70758 2.21799 5.07962C2 5.50258 2 6.27902 2 7.38639V8.8364C2 9.94377 2 10.4974 2.21799 10.9204C2.40973 11.2924 2.71569 11.5949 3.09202 11.7845C3.51984 12 4.07989 12 5.2 12H10.7999C11.92 12 12.4802 12 12.908 11.7845C13.2843 11.5949 13.5903 11.2924 13.782 10.9204C14 10.4974 14 9.94377 14 8.8364V7.38639C14 6.27902 14 5.50258 13.782 5.07962C13.5903 4.70758 13.2843 4.40509 12.908 4.21553C12.4802 4.00002 11.92 4.00002 10.7999 4.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTotal01)
const Total01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Total01', props.className].join(' ')}
    />
  )
})
Total01.displayName = 'IconTotal01'
export default Total01
