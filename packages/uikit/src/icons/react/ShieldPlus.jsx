import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShieldPlus = (props, ref) => {
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
        d="M8.00008 9.66666V5.66666M6.00008 7.66666H10.0001M13.3334 8C13.3334 11.2723 9.76411 13.6523 8.46541 14.4099C8.31781 14.496 8.24402 14.5391 8.13987 14.5614C8.05904 14.5787 7.94112 14.5787 7.86029 14.5614C7.75615 14.5391 7.68235 14.496 7.53475 14.4099C6.23606 13.6523 2.66675 11.2723 2.66675 8V4.81173C2.66675 4.27872 2.66675 4.01222 2.75392 3.78313C2.83093 3.58076 2.95607 3.40018 3.11852 3.25702C3.30241 3.09495 3.55195 3.00138 4.05102 2.81423L7.62555 1.47378C7.76415 1.4218 7.83344 1.39582 7.90474 1.38552C7.96797 1.37638 8.03219 1.37638 8.09542 1.38552C8.16672 1.39582 8.23602 1.4218 8.37461 1.47378L11.9491 2.81423C12.4482 3.00138 12.6978 3.09495 12.8816 3.25702C13.0441 3.40018 13.1692 3.58076 13.2462 3.78313C13.3334 4.01222 13.3334 4.27872 13.3334 4.81173V8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShieldPlus)
const ShieldPlus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ShieldPlus', props.className].join(' ')}
    />
  )
})
ShieldPlus.displayName = 'IconShieldPlus'
export default ShieldPlus
