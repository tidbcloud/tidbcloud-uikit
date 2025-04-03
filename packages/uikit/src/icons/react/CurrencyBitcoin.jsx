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
      ref={ref}
      {...props}
    >
      <path
        d="M6.33317 1.3335V2.66683M6.33317 13.3335V14.6668M8.99984 1.3335V2.66683M8.99984 13.3335V14.6668M4.99984 2.66683H9.33317C10.8059 2.66683 11.9998 3.86074 11.9998 5.3335C11.9998 6.80626 10.8059 8.00016 9.33317 8.00016H4.99984H9.99984C11.4726 8.00016 12.6665 9.19407 12.6665 10.6668C12.6665 12.1396 11.4726 13.3335 9.99984 13.3335H4.99984M4.99984 2.66683H3.6665M4.99984 2.66683V13.3335M4.99984 13.3335H3.6665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
