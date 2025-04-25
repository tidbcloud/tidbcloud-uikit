import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInfo2 = (props, ref) => {
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
        d="M7.58301 7.66671V12.3334H9.08301V7.66671H7.58301ZM7.99967 11.9167C8.22979 11.9167 8.41634 12.1033 8.41634 12.3334H6.91634C6.91634 12.9317 7.40136 13.4167 7.99967 13.4167V11.9167ZM7.58301 12.3334C7.58301 12.1033 7.76955 11.9167 7.99967 11.9167V13.4167C8.59798 13.4167 9.08301 12.9317 9.08301 12.3334H7.58301ZM7.99967 8.08337C7.76956 8.08337 7.58301 7.89683 7.58301 7.66671H9.08301C9.08301 7.0684 8.59798 6.58337 7.99967 6.58337V8.08337ZM7.99967 6.58337C7.40137 6.58337 6.91634 7.0684 6.91634 7.66671H8.41634C8.41634 7.89683 8.22979 8.08337 7.99967 8.08337V6.58337ZM7.91634 4.00004C7.91634 3.95402 7.95365 3.91671 7.99967 3.91671V5.41671C8.78208 5.41671 9.41634 4.78244 9.41634 4.00004H7.91634ZM7.99967 3.91671C8.0457 3.91671 8.08301 3.95402 8.08301 4.00004H6.58301C6.58301 4.78244 7.21727 5.41671 7.99967 5.41671V3.91671ZM8.08301 4.00004C8.08301 4.04606 8.0457 4.08337 7.99967 4.08337V2.58337C7.21727 2.58337 6.58301 3.21764 6.58301 4.00004H8.08301ZM7.99967 4.08337C7.95365 4.08337 7.91634 4.04606 7.91634 4.00004H9.41634C9.41634 3.21764 8.78208 2.58337 7.99967 2.58337V4.08337ZM8.41634 12.3334V10H6.91634V12.3334H8.41634ZM8.41634 10V7.66671H6.91634V10H8.41634Z"
        fill="#383E40"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInfo2)
const Info2 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Info2', props.className].join(' ')}
    />
  )
})
Info2.displayName = 'IconInfo2'
export default Info2
