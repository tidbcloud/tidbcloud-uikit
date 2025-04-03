import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked02 = (props, ref) => {
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
        d="M8.66683 3.33333C8.66683 4.06971 7.02521 4.66667 5.00016 4.66667C2.97512 4.66667 1.3335 4.06971 1.3335 3.33333M8.66683 3.33333C8.66683 2.59695 7.02521 2 5.00016 2C2.97512 2 1.3335 2.59695 1.3335 3.33333M8.66683 3.33333V6.30477C7.85249 6.54932 7.3335 6.91929 7.3335 7.33333M1.3335 3.33333V11.3333C1.3335 12.0697 2.97512 12.6667 5.00016 12.6667C5.88658 12.6667 6.69954 12.5523 7.3335 12.3619V7.33333M1.3335 6C1.3335 6.73638 2.97512 7.33333 5.00016 7.33333C5.88658 7.33333 6.69954 7.21895 7.3335 7.02857M1.3335 8.66667C1.3335 9.40305 2.97512 10 5.00016 10C5.88658 10 6.69954 9.88562 7.3335 9.69523M14.6668 7.33333C14.6668 8.06971 13.0252 8.66667 11.0002 8.66667C8.97512 8.66667 7.3335 8.06971 7.3335 7.33333M14.6668 7.33333C14.6668 6.59695 13.0252 6 11.0002 6C8.97512 6 7.3335 6.59695 7.3335 7.33333M14.6668 7.33333V12.6667C14.6668 13.403 13.0252 14 11.0002 14C8.97512 14 7.3335 13.403 7.3335 12.6667V7.33333M14.6668 10C14.6668 10.7364 13.0252 11.3333 11.0002 11.3333C8.97512 11.3333 7.3335 10.7364 7.3335 10"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked02)
const CoinsStacked02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CoinsStacked02', props.className].join(' ')}
    />
  )
})
CoinsStacked02.displayName = 'IconCoinsStacked02'
export default CoinsStacked02
