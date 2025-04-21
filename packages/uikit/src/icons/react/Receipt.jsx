import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReceipt = (props, ref) => {
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
        d="M2.66669 5.2C2.66669 4.0799 2.66669 3.51984 2.88467 3.09202C3.07642 2.71569 3.38238 2.40973 3.75871 2.21799C4.18653 2 4.74658 2 5.86669 2H10.1334C11.2535 2 11.8135 2 12.2413 2.21799C12.6177 2.40973 12.9236 2.71569 13.1154 3.09202C13.3334 3.51984 13.3334 4.0799 13.3334 5.2V14L11.5 12.6667L9.83335 14L8.00002 12.6667L6.16669 14L4.50002 12.6667L2.66669 14V5.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReceipt)
const Receipt = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Receipt', props.className].join(' ')}
    />
  )
})
Receipt.displayName = 'IconReceipt'
export default Receipt
