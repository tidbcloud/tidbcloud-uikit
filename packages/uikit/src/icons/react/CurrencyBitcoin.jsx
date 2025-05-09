import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyBitcoin = (props, ref) => {
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
        d="M6.33332 1.3335V2.66683M6.33332 13.3335V14.6668M8.99999 1.3335V2.66683M8.99999 13.3335V14.6668M4.99999 2.66683H9.33332C10.8061 2.66683 12 3.86074 12 5.3335C12 6.80626 10.8061 8.00016 9.33332 8.00016H4.99999H9.99999C11.4727 8.00016 12.6667 9.19407 12.6667 10.6668C12.6667 12.1396 11.4727 13.3335 9.99999 13.3335H4.99999M4.99999 2.66683H3.66666M4.99999 2.66683V13.3335M4.99999 13.3335H3.66666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'CurrencyBitcoin', props.className].join(' ')}
    />
  )
})
CurrencyBitcoin.displayName = 'IconCurrencyBitcoin'
export default CurrencyBitcoin
