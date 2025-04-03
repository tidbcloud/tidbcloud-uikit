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
      ref={ref}
      {...props}
    >
      <path
        d="M5.66683 9.77794C5.66683 10.6371 6.36328 11.3335 7.22238 11.3335H8.66683C9.5873 11.3335 10.3335 10.5873 10.3335 9.66683C10.3335 8.74636 9.5873 8.00016 8.66683 8.00016H7.3335C6.41302 8.00016 5.66683 7.25397 5.66683 6.3335C5.66683 5.41302 6.41302 4.66683 7.3335 4.66683H8.77794C9.63705 4.66683 10.3335 5.36328 10.3335 6.22239M8.00016 3.66683V4.66683M8.00016 11.3335V12.3335M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
