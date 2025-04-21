import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyBitcoinCircle = (props, ref) => {
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
        d="M6.33334 5.00016H9.16668C9.9951 5.00016 10.6667 5.67174 10.6667 6.50016C10.6667 7.32859 9.9951 8.00016 9.16668 8.00016H6.33334H9.50001C10.3284 8.00016 11 8.67174 11 9.50016C11 10.3286 10.3284 11.0002 9.50001 11.0002H6.33334M6.33334 5.00016H5.33334M6.33334 5.00016V11.0002M6.33334 11.0002H5.33334M6.66668 4.00016V5.00016M6.66668 11.0002V12.0002M8.66668 4.00016V5.00016M8.66668 11.0002V12.0002M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00001 14.6668C4.31811 14.6668 1.33334 11.6821 1.33334 8.00016C1.33334 4.31826 4.31811 1.3335 8.00001 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'CurrencyBitcoinCircle', props.className].join(' ')}
    />
  )
})
CurrencyBitcoinCircle.displayName = 'IconCurrencyBitcoinCircle'
export default CurrencyBitcoinCircle
