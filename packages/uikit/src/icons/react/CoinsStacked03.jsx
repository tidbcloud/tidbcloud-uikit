import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked03 = (props, ref) => {
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
        d="M8.66683 3.33333C8.66683 4.06971 7.02521 4.66667 5.00016 4.66667C2.97512 4.66667 1.3335 4.06971 1.3335 3.33333M8.66683 3.33333C8.66683 2.59695 7.02521 2 5.00016 2C2.97512 2 1.3335 2.59695 1.3335 3.33333M8.66683 3.33333V4.33333M1.3335 3.33333V11.3333C1.3335 12.0697 2.97512 12.6667 5.00016 12.6667M5.00016 7.33333C4.8878 7.33333 4.77662 7.3315 4.66683 7.3279C2.798 7.26666 1.3335 6.69552 1.3335 6M5.00016 10C2.97512 10 1.3335 9.40305 1.3335 8.66667M14.6668 7.66667C14.6668 8.40305 13.0252 9 11.0002 9C8.97512 9 7.3335 8.40305 7.3335 7.66667M14.6668 7.66667C14.6668 6.93029 13.0252 6.33333 11.0002 6.33333C8.97512 6.33333 7.3335 6.93029 7.3335 7.66667M14.6668 7.66667V12.6667C14.6668 13.403 13.0252 14 11.0002 14C8.97512 14 7.3335 13.403 7.3335 12.6667V7.66667M14.6668 10.1667C14.6668 10.903 13.0252 11.5 11.0002 11.5C8.97512 11.5 7.3335 10.903 7.3335 10.1667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked03)
const CoinsStacked03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CoinsStacked03', props.className].join(' ')}
    />
  )
})
CoinsStacked03.displayName = 'IconCoinsStacked03'
export default CoinsStacked03
