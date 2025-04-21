import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReceiptCheck = (props, ref) => {
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
        d="M6.00002 7L7.33335 8.33333L10.3334 5.33333M13.3334 14V5.2C13.3334 4.0799 13.3334 3.51984 13.1154 3.09202C12.9236 2.71569 12.6177 2.40973 12.2413 2.21799C11.8135 2 11.2535 2 10.1334 2H5.86669C4.74658 2 4.18653 2 3.75871 2.21799C3.38238 2.40973 3.07642 2.71569 2.88467 3.09202C2.66669 3.51984 2.66669 4.0799 2.66669 5.2V14L4.50002 12.6667L6.16669 14L8.00002 12.6667L9.83335 14L11.5 12.6667L13.3334 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReceiptCheck)
const ReceiptCheck = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ReceiptCheck', props.className].join(' ')}
    />
  )
})
ReceiptCheck.displayName = 'IconReceiptCheck'
export default ReceiptCheck
