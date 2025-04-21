import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBankNote03 = (props, ref) => {
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
        d="M9.33334 6.00016H7.66667C7.11438 6.00016 6.66667 6.44788 6.66667 7.00016C6.66667 7.55245 7.11438 8.00016 7.66667 8.00016H8.33334C8.88562 8.00016 9.33334 8.44788 9.33334 9.00016C9.33334 9.55245 8.88562 10.0002 8.33334 10.0002H6.66667M8 5.3335V6.00016M8 10.0002V10.6668M12 8.00016H12.0067M4 8.00016H4.00667M1.33334 5.46683L1.33334 10.5335C1.33334 11.2802 1.33334 11.6536 1.47866 11.9388C1.60649 12.1897 1.81047 12.3937 2.06135 12.5215C2.34656 12.6668 2.71993 12.6668 3.46667 12.6668L12.5333 12.6668C13.2801 12.6668 13.6534 12.6668 13.9387 12.5215C14.1895 12.3937 14.3935 12.1897 14.5213 11.9388C14.6667 11.6536 14.6667 11.2802 14.6667 10.5335V5.46683C14.6667 4.72009 14.6667 4.34673 14.5213 4.06151C14.3935 3.81063 14.1895 3.60665 13.9387 3.47882C13.6534 3.3335 13.2801 3.3335 12.5333 3.3335L3.46667 3.3335C2.71993 3.3335 2.34656 3.3335 2.06135 3.47882C1.81047 3.60665 1.60649 3.81063 1.47866 4.06151C1.33334 4.34672 1.33334 4.72009 1.33334 5.46683ZM12.3333 8.00016C12.3333 8.18426 12.1841 8.3335 12 8.3335C11.8159 8.3335 11.6667 8.18426 11.6667 8.00016C11.6667 7.81607 11.8159 7.66683 12 7.66683C12.1841 7.66683 12.3333 7.81607 12.3333 8.00016ZM4.33334 8.00016C4.33334 8.18426 4.1841 8.3335 4 8.3335C3.81591 8.3335 3.66667 8.18426 3.66667 8.00016C3.66667 7.81607 3.81591 7.66683 4 7.66683C4.1841 7.66683 4.33334 7.81607 4.33334 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBankNote03)
const BankNote03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BankNote03', props.className].join(' ')}
    />
  )
})
BankNote03.displayName = 'IconBankNote03'
export default BankNote03
