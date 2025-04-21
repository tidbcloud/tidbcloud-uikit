import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyDollarCircle = (props, ref) => {
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
        d="M5.66668 9.77794C5.66668 10.6371 6.36312 11.3335 7.22223 11.3335H8.66668C9.58715 11.3335 10.3333 10.5873 10.3333 9.66683C10.3333 8.74636 9.58715 8.00016 8.66668 8.00016H7.33334C6.41287 8.00016 5.66668 7.25397 5.66668 6.3335C5.66668 5.41302 6.41287 4.66683 7.33334 4.66683H8.77779C9.6369 4.66683 10.3333 5.36328 10.3333 6.22239M8.00001 3.66683V4.66683M8.00001 11.3335V12.3335M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00001 14.6668C4.31811 14.6668 1.33334 11.6821 1.33334 8.00016C1.33334 4.31826 4.31811 1.3335 8.00001 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyDollarCircle)
const CurrencyDollarCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CurrencyDollarCircle', props.className].join(' ')}
    />
  )
})
CurrencyDollarCircle.displayName = 'IconCurrencyDollarCircle'
export default CurrencyDollarCircle
