import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWind03 = (props, ref) => {
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
        d="M11.1759 4.33333C11.5421 3.92417 12.0743 3.66667 12.6666 3.66667C13.7712 3.66667 14.6666 4.5621 14.6666 5.66667C14.6666 6.77124 13.7712 7.66667 12.6666 7.66667H8.66659M4.50918 2.66667C4.8754 2.2575 5.40759 2 5.99992 2C7.10449 2 7.99992 2.89543 7.99992 4C7.99992 5.10457 7.10449 6 5.99992 6H1.33325M7.17585 13.3333C7.54206 13.7425 8.07425 14 8.66659 14C9.77116 14 10.6666 13.1046 10.6666 12C10.6666 10.8954 9.77116 10 8.66659 10H1.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWind03)
const Wind03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wind03', props.className].join(' ')}
    />
  )
})
Wind03.displayName = 'IconWind03'
export default Wind03
