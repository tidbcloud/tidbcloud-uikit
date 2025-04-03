import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoins02 = (props, ref) => {
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
        d="M10.6253 10.6253C12.9071 10.3198 14.6668 8.36551 14.6668 6.00016C14.6668 3.42283 12.5775 1.3335 10.0002 1.3335C7.63482 1.3335 5.68049 3.09328 5.37501 5.37501M5.00016 8.66683L6.00016 8.00016V11.6668M5.00016 11.6668H7.00016M10.6668 10.0002C10.6668 12.5775 8.57749 14.6668 6.00016 14.6668C3.42283 14.6668 1.3335 12.5775 1.3335 10.0002C1.3335 7.42283 3.42283 5.3335 6.00016 5.3335C8.57749 5.3335 10.6668 7.42283 10.6668 10.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoins02)
const Coins02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Coins02', props.className].join(' ')}
    />
  )
})
Coins02.displayName = 'IconCoins02'
export default Coins02
