import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEthereum = (props, ref) => {
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
        d="M2.66666 7.3336L7.99999 8.66683L13.3333 7.3335M2.66666 7.3336L7.99999 1.3335M2.66666 7.3336L7.99999 6.00022M13.3333 7.3335L7.99999 1.3335M13.3333 7.3335L7.99999 6.00022M7.99999 1.3335V6.00022M3.66666 10.0002L8.00007 14.6668L12.3333 10.0002L7.99999 11.0002L3.66666 10.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'CurrencyEthereum', props.className].join(' ')}
    />
  )
})
CurrencyEthereum.displayName = 'IconCurrencyEthereum'
export default CurrencyEthereum
