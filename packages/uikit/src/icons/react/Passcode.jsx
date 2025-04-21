import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPasscode = (props, ref) => {
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
        d="M7.99992 8.00008H8.00325M11.3333 8.00008H11.3366M4.66659 8.00008H4.66992M3.46659 4.66675H12.5333C13.28 4.66675 13.6534 4.66675 13.9386 4.81207C14.1895 4.9399 14.3934 5.14388 14.5213 5.39476C14.6666 5.67998 14.6666 6.05334 14.6666 6.80008V9.20008C14.6666 9.94682 14.6666 10.3202 14.5213 10.6054C14.3934 10.8563 14.1895 11.0603 13.9386 11.1881C13.6534 11.3334 13.28 11.3334 12.5333 11.3334H3.46659C2.71985 11.3334 2.34648 11.3334 2.06126 11.1881C1.81038 11.0603 1.60641 10.8563 1.47858 10.6054C1.33325 10.3202 1.33325 9.94682 1.33325 9.20008V6.80008C1.33325 6.05334 1.33325 5.67998 1.47858 5.39476C1.60641 5.14388 1.81038 4.9399 2.06126 4.81207C2.34648 4.66675 2.71985 4.66675 3.46659 4.66675ZM8.16659 8.00008C8.16659 8.09213 8.09197 8.16675 7.99992 8.16675C7.90787 8.16675 7.83325 8.09213 7.83325 8.00008C7.83325 7.90803 7.90787 7.83341 7.99992 7.83341C8.09197 7.83341 8.16659 7.90803 8.16659 8.00008ZM11.4999 8.00008C11.4999 8.09213 11.4253 8.16675 11.3333 8.16675C11.2412 8.16675 11.1666 8.09213 11.1666 8.00008C11.1666 7.90803 11.2412 7.83341 11.3333 7.83341C11.4253 7.83341 11.4999 7.90803 11.4999 8.00008ZM4.83325 8.00008C4.83325 8.09213 4.75863 8.16675 4.66659 8.16675C4.57454 8.16675 4.49992 8.09213 4.49992 8.00008C4.49992 7.90803 4.57454 7.83341 4.66659 7.83341C4.75863 7.83341 4.83325 7.90803 4.83325 8.00008Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPasscode)
const Passcode = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Passcode', props.className].join(' ')}
    />
  )
})
Passcode.displayName = 'IconPasscode'
export default Passcode
