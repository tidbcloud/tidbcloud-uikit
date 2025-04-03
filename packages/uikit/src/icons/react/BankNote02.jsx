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
      ref={ref}
      {...props}
    >
      <path
        d="M4.00016 6.66683V9.3335M12.0002 6.66683V9.3335M1.3335 5.46683L1.3335 10.5335C1.3335 11.2802 1.3335 11.6536 1.47882 11.9388C1.60665 12.1897 1.81063 12.3937 2.06151 12.5215C2.34672 12.6668 2.72009 12.6668 3.46683 12.6668L12.5335 12.6668C13.2802 12.6668 13.6536 12.6668 13.9388 12.5215C14.1897 12.3937 14.3937 12.1897 14.5215 11.9388C14.6668 11.6536 14.6668 11.2802 14.6668 10.5335V5.46683C14.6668 4.72009 14.6668 4.34673 14.5215 4.06151C14.3937 3.81063 14.1897 3.60665 13.9388 3.47882C13.6536 3.3335 13.2802 3.3335 12.5335 3.3335L3.46683 3.3335C2.72009 3.3335 2.34672 3.3335 2.06151 3.47882C1.81063 3.60665 1.60665 3.81063 1.47882 4.06151C1.3335 4.34672 1.3335 4.72009 1.3335 5.46683ZM9.66683 8.00016C9.66683 8.92064 8.92064 9.66683 8.00016 9.66683C7.07969 9.66683 6.3335 8.92064 6.3335 8.00016C6.3335 7.07969 7.07969 6.3335 8.00016 6.3335C8.92064 6.3335 9.66683 7.07969 9.66683 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
