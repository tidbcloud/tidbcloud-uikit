import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEthereumCircle = (props, ref) => {
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
        d="M4.33334 10.3335L8.00014 12.0002L11.6667 10.3335M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00001 14.6668C4.31811 14.6668 1.33334 11.6821 1.33334 8.00016C1.33334 4.31826 4.31811 1.3335 8.00001 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016ZM4.33334 7.66683L8.00014 9.3335L11.6667 7.66683L8.00014 3.3335L4.33334 7.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyEthereumCircle)
const CurrencyEthereumCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CurrencyEthereumCircle', props.className].join(' ')}
    />
  )
})
CurrencyEthereumCircle.displayName = 'IconCurrencyEthereumCircle'
export default CurrencyEthereumCircle
