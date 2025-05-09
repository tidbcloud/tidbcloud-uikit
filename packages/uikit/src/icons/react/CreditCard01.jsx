import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCard01 = (props, ref) => {
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
        d="M14.6667 6.66683H1.33334M1.33334 5.46683L1.33334 10.5335C1.33334 11.2802 1.33334 11.6536 1.47866 11.9388C1.60649 12.1897 1.81047 12.3937 2.06135 12.5215C2.34656 12.6668 2.71993 12.6668 3.46667 12.6668L12.5333 12.6668C13.2801 12.6668 13.6534 12.6668 13.9387 12.5215C14.1895 12.3937 14.3935 12.1897 14.5213 11.9388C14.6667 11.6536 14.6667 11.2802 14.6667 10.5335V5.46683C14.6667 4.72009 14.6667 4.34673 14.5213 4.06151C14.3935 3.81063 14.1895 3.60665 13.9387 3.47882C13.6534 3.3335 13.2801 3.3335 12.5333 3.3335L3.46667 3.3335C2.71993 3.3335 2.34656 3.3335 2.06135 3.47882C1.81047 3.60665 1.60649 3.81063 1.47866 4.06151C1.33334 4.34672 1.33334 4.72009 1.33334 5.46683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCard01)
const CreditCard01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CreditCard01', props.className].join(' ')}
    />
  )
})
CreditCard01.displayName = 'IconCreditCard01'
export default CreditCard01
