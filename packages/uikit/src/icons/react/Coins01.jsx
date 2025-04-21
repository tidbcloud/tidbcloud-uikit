import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoins01 = (props, ref) => {
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
        d="M10.6252 10.6253C12.9069 10.3198 14.6667 8.36551 14.6667 6.00016C14.6667 3.42283 12.5773 1.3335 10 1.3335C7.63466 1.3335 5.68033 3.09328 5.37485 5.37501M10.6667 10.0002C10.6667 12.5775 8.57733 14.6668 6 14.6668C3.42267 14.6668 1.33334 12.5775 1.33334 10.0002C1.33334 7.42283 3.42267 5.3335 6 5.3335C8.57733 5.3335 10.6667 7.42283 10.6667 10.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoins01)
const Coins01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Coins01', props.className].join(' ')}
    />
  )
})
Coins01.displayName = 'IconCoins01'
export default Coins01
