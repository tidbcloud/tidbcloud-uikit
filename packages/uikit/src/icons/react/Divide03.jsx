import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDivide03 = (props, ref) => {
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
        d="M8.00016 5.33325H8.00683M8.00016 10.6666H8.00683M4.66683 7.99992H11.3335M8.3335 5.33325C8.3335 5.51735 8.18426 5.66659 8.00016 5.66659C7.81607 5.66659 7.66683 5.51735 7.66683 5.33325C7.66683 5.14916 7.81607 4.99992 8.00016 4.99992C8.18426 4.99992 8.3335 5.14916 8.3335 5.33325ZM8.3335 10.6666C8.3335 10.8507 8.18426 10.9999 8.00016 10.9999C7.81607 10.9999 7.66683 10.8507 7.66683 10.6666C7.66683 10.4825 7.81607 10.3333 8.00016 10.3333C8.18426 10.3333 8.3335 10.4825 8.3335 10.6666ZM14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDivide03)
const Divide03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Divide03', props.className].join(' ')}
    />
  )
})
Divide03.displayName = 'IconDivide03'
export default Divide03
