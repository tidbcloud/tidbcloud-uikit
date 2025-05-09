import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShield01 = (props, ref) => {
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
        d="M7.53475 14.4099C7.68235 14.496 7.75615 14.5391 7.86029 14.5614C7.94112 14.5787 8.05904 14.5787 8.13987 14.5614C8.24402 14.5391 8.31781 14.496 8.46541 14.4099C9.76411 13.6523 13.3334 11.2723 13.3334 8V4.81173C13.3334 4.27872 13.3334 4.01222 13.2462 3.78313C13.1692 3.58076 13.0441 3.40018 12.8816 3.25702C12.6978 3.09495 12.4482 3.00138 11.9491 2.81423L8.37461 1.47378C8.23602 1.4218 8.16672 1.39582 8.09542 1.38552C8.03219 1.37638 7.96797 1.37638 7.90474 1.38552C7.83344 1.39582 7.76415 1.4218 7.62555 1.47378L4.05102 2.81423C3.55195 3.00138 3.30241 3.09495 3.11852 3.25702C2.95607 3.40018 2.83093 3.58076 2.75392 3.78313C2.66675 4.01222 2.66675 4.27872 2.66675 4.81173V8C2.66675 11.2723 6.23606 13.6523 7.53475 14.4099Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShield01)
const Shield01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Shield01', props.className].join(' ')}
    />
  )
})
Shield01.displayName = 'IconShield01'
export default Shield01
