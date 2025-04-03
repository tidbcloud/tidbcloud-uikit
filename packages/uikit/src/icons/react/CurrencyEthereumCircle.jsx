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
      ref={ref}
      {...props}
    >
      <path
        d="M4.3335 10.3335L8.00029 12.0002L11.6668 10.3335M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016ZM4.3335 7.66683L8.00029 9.3335L11.6668 7.66683L8.00029 3.3335L4.3335 7.66683Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
