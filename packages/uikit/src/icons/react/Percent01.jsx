import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPercent01 = (props, ref) => {
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
        d="M12.6666 3.33337L3.33331 12.6667M4.99998 4.33337C4.99998 4.70156 4.7015 5.00004 4.33331 5.00004C3.96512 5.00004 3.66665 4.70156 3.66665 4.33337C3.66665 3.96518 3.96512 3.66671 4.33331 3.66671C4.7015 3.66671 4.99998 3.96518 4.99998 4.33337ZM12.3333 11.6667C12.3333 12.0349 12.0348 12.3334 11.6666 12.3334C11.2985 12.3334 11 12.0349 11 11.6667C11 11.2985 11.2985 11 11.6666 11C12.0348 11 12.3333 11.2985 12.3333 11.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPercent01)
const Percent01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Percent01', props.className].join(' ')}
    />
  )
})
Percent01.displayName = 'IconPercent01'
export default Percent01
