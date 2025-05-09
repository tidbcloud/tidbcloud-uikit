import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPhone01 = (props, ref) => {
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
        d="M7.99992 11.6666H8.00659M5.46659 14.6666H10.5333C11.28 14.6666 11.6534 14.6666 11.9386 14.5213C12.1895 14.3934 12.3934 14.1895 12.5213 13.9386C12.6666 13.6534 12.6666 13.28 12.6666 12.5333V3.46659C12.6666 2.71985 12.6666 2.34648 12.5213 2.06126C12.3934 1.81038 12.1895 1.60641 11.9386 1.47858C11.6534 1.33325 11.28 1.33325 10.5333 1.33325H5.46659C4.71985 1.33325 4.34648 1.33325 4.06126 1.47858C3.81038 1.60641 3.60641 1.81038 3.47858 2.06126C3.33325 2.34648 3.33325 2.71985 3.33325 3.46659V12.5333C3.33325 13.28 3.33325 13.6534 3.47858 13.9386C3.60641 14.1895 3.81038 14.3934 4.06126 14.5213C4.34648 14.6666 4.71985 14.6666 5.46659 14.6666ZM8.33325 11.6666C8.33325 11.8507 8.18401 11.9999 7.99992 11.9999C7.81582 11.9999 7.66659 11.8507 7.66659 11.6666C7.66659 11.4825 7.81582 11.3333 7.99992 11.3333C8.18401 11.3333 8.33325 11.4825 8.33325 11.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPhone01)
const Phone01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Phone01', props.className].join(' ')}
    />
  )
})
Phone01.displayName = 'IconPhone01'
export default Phone01
