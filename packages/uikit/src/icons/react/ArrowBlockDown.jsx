import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowBlockDown = (props, ref) => {
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
        d="M6.00004 2.53333C6.00004 2.34665 6.00004 2.25331 6.03637 2.182C6.06833 2.11928 6.11932 2.06829 6.18204 2.03633C6.25335 2 6.34669 2 6.53337 2H9.46671C9.65339 2 9.74673 2 9.81804 2.03633C9.88076 2.06829 9.93175 2.11928 9.96371 2.182C10 2.25331 10 2.34665 10 2.53333V9.33333H12.6667L8.00004 14L3.33337 9.33333H6.00004V2.53333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowBlockDown)
const ArrowBlockDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowBlockDown', props.className].join(' ')}
    />
  )
})
ArrowBlockDown.displayName = 'IconArrowBlockDown'
export default ArrowBlockDown
