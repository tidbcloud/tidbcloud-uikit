import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyDollarCircle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="M8.5 14.667A2.333 2.333 0 0 0 10.833 17H13a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.167A2.333 2.333 0 0 1 15.5 9.333M12 5.5V7m0 10v1.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyDollarCircle)
const CurrencyDollarCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyDollarCircle'].join(' ')}
    />
  )
})
CurrencyDollarCircle.displayName = 'IconCurrencyDollarCircle'
export default CurrencyDollarCircle
