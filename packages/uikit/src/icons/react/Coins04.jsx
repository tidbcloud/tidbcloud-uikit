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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.73401 2.66683C7.57571 1.84204 8.72847 1.3335 10 1.3335C12.5773 1.3335 14.6667 3.42283 14.6667 6.00016C14.6667 7.27172 14.1581 8.4245 13.3333 9.26619M5 8.66683L6 8.00016V11.6668M5 11.6668H7M10.6667 10.0002C10.6667 12.5775 8.57733 14.6668 6 14.6668C3.42267 14.6668 1.33334 12.5775 1.33334 10.0002C1.33334 7.42283 3.42267 5.3335 6 5.3335C8.57733 5.3335 10.6667 7.42283 10.6667 10.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
