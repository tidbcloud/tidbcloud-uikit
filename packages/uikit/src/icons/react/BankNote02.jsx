import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBankNote02 = (props, ref) => {
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
        d="M4 6.66683V9.3335M12 6.66683V9.3335M1.33334 5.46683L1.33334 10.5335C1.33334 11.2802 1.33334 11.6536 1.47866 11.9388C1.60649 12.1897 1.81047 12.3937 2.06135 12.5215C2.34656 12.6668 2.71993 12.6668 3.46667 12.6668L12.5333 12.6668C13.2801 12.6668 13.6534 12.6668 13.9387 12.5215C14.1895 12.3937 14.3935 12.1897 14.5213 11.9388C14.6667 11.6536 14.6667 11.2802 14.6667 10.5335V5.46683C14.6667 4.72009 14.6667 4.34673 14.5213 4.06151C14.3935 3.81063 14.1895 3.60665 13.9387 3.47882C13.6534 3.3335 13.2801 3.3335 12.5333 3.3335L3.46667 3.3335C2.71993 3.3335 2.34656 3.3335 2.06135 3.47882C1.81047 3.60665 1.60649 3.81063 1.47866 4.06151C1.33334 4.34672 1.33334 4.72009 1.33334 5.46683ZM9.66667 8.00016C9.66667 8.92064 8.92048 9.66683 8 9.66683C7.07953 9.66683 6.33334 8.92064 6.33334 8.00016C6.33334 7.07969 7.07953 6.3335 8 6.3335C8.92048 6.3335 9.66667 7.07969 9.66667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBankNote02)
const BankNote02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BankNote02', props.className].join(' ')}
    />
  )
})
BankNote02.displayName = 'IconBankNote02'
export default BankNote02
