import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEuro = (props, ref) => {
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
        d="M19 5.519a8.5 8.5 0 1 0 0 12.962M3 14h10M3 10h10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyEuro)
const CurrencyEuro = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyEuro'].join(' ')}
    />
  )
})
CurrencyEuro.displayName = 'IconCurrencyEuro'
export default CurrencyEuro
