import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoins04 = (props, ref) => {
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
        d="M6.73417 2.66683C7.57587 1.84204 8.72863 1.3335 10.0002 1.3335C12.5775 1.3335 14.6668 3.42283 14.6668 6.00016C14.6668 7.27172 14.1583 8.4245 13.3335 9.26619M5.00016 8.66683L6.00016 8.00016V11.6668M5.00016 11.6668H7.00016M10.6668 10.0002C10.6668 12.5775 8.57749 14.6668 6.00016 14.6668C3.42283 14.6668 1.3335 12.5775 1.3335 10.0002C1.3335 7.42283 3.42283 5.3335 6.00016 5.3335C8.57749 5.3335 10.6668 7.42283 10.6668 10.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoins04)
const Coins04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Coins04', props.className].join(' ')}
    />
  )
})
Coins04.displayName = 'IconCoins04'
export default Coins04
