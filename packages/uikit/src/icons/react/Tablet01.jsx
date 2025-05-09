import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTablet01 = (props, ref) => {
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
        d="M8.00008 11.6666H8.00675M4.80008 14.6666H11.2001C11.9468 14.6666 12.3202 14.6666 12.6054 14.5213C12.8563 14.3934 13.0603 14.1895 13.1881 13.9386C13.3334 13.6534 13.3334 13.28 13.3334 12.5333V3.46659C13.3334 2.71985 13.3334 2.34648 13.1881 2.06126C13.0603 1.81038 12.8563 1.60641 12.6054 1.47858C12.3202 1.33325 11.9468 1.33325 11.2001 1.33325H4.80008C4.05334 1.33325 3.67998 1.33325 3.39476 1.47858C3.14388 1.60641 2.9399 1.81038 2.81207 2.06126C2.66675 2.34648 2.66675 2.71985 2.66675 3.46659V12.5333C2.66675 13.28 2.66675 13.6534 2.81207 13.9386C2.9399 14.1895 3.14388 14.3934 3.39476 14.5213C3.67998 14.6666 4.05334 14.6666 4.80008 14.6666ZM8.33341 11.6666C8.33341 11.8507 8.18418 11.9999 8.00008 11.9999C7.81599 11.9999 7.66675 11.8507 7.66675 11.6666C7.66675 11.4825 7.81599 11.3333 8.00008 11.3333C8.18418 11.3333 8.33341 11.4825 8.33341 11.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTablet01)
const Tablet01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Tablet01', props.className].join(' ')}
    />
  )
})
Tablet01.displayName = 'IconTablet01'
export default Tablet01
