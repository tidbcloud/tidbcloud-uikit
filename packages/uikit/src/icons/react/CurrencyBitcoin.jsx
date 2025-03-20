import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyBitcoin = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 2v2m0 16v2m4-20v2m0 16v2m-6-18H14a4 4 0 0 1 0 8H7.5 15a4 4 0 0 1 0 8H7.5m0-16h-2m2 0v16m0 0h-2"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyBitcoin)
const CurrencyBitcoin = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyBitcoin'].join(' ')}
    />
  )
})
CurrencyBitcoin.displayName = 'IconCurrencyBitcoin'
export default CurrencyBitcoin
