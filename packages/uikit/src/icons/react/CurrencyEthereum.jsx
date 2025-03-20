import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEthereum = (props, ref) => {
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
        d="m4 11 8 2 8-2M4 11l8-9m-8 9 8-2m8 2-8-9m8 9-8-2m0-7v7m-6.5 6 6.5 7 6.5-7-6.5 1.5z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyEthereum)
const CurrencyEthereum = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyEthereum'].join(' ')}
    />
  )
})
CurrencyEthereum.displayName = 'IconCurrencyEthereum'
export default CurrencyEthereum
