import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyBitcoinCircle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 7.5h4.25a2.25 2.25 0 0 1 0 4.5H9.5h4.75a2.25 2.25 0 0 1 0 4.5H9.5m0-9H8m1.5 0v9m0 0H8M10 6v1.5m0 9V18m3-12v1.5m0 9V18m9-6c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyBitcoinCircle)
const CurrencyBitcoinCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyBitcoinCircle'].join(' ')}
    />
  )
})
CurrencyBitcoinCircle.displayName = 'IconCurrencyBitcoinCircle'
export default CurrencyBitcoinCircle
