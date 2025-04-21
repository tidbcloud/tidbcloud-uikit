import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGift02 = (props, ref) => {
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
        d="M7.99998 4.66683H4.99998C4.55795 4.66683 4.13403 4.49123 3.82147 4.17867C3.50891 3.86611 3.33331 3.44219 3.33331 3.00016C3.33331 2.55814 3.50891 2.13421 3.82147 1.82165C4.13403 1.50909 4.55795 1.3335 4.99998 1.3335C7.33331 1.3335 7.99998 4.66683 7.99998 4.66683ZM7.99998 4.66683H11C11.442 4.66683 11.8659 4.49123 12.1785 4.17867C12.4911 3.86611 12.6666 3.44219 12.6666 3.00016C12.6666 2.55814 12.4911 2.13421 12.1785 1.82165C11.8659 1.50909 11.442 1.3335 11 1.3335C8.66665 1.3335 7.99998 4.66683 7.99998 4.66683ZM7.99998 4.66683L7.99998 14.6668M1.33331 9.3335H14.6666M1.33331 6.80016L1.33331 12.5335C1.33331 13.2802 1.33331 13.6536 1.47864 13.9388C1.60647 14.1897 1.81044 14.3937 2.06133 14.5215C2.34654 14.6668 2.71991 14.6668 3.46665 14.6668L12.5333 14.6668C13.2801 14.6668 13.6534 14.6668 13.9386 14.5215C14.1895 14.3937 14.3935 14.1897 14.5213 13.9388C14.6666 13.6536 14.6666 13.2802 14.6666 12.5335V6.80016C14.6666 6.05343 14.6666 5.68006 14.5213 5.39484C14.3935 5.14396 14.1895 4.93999 13.9386 4.81216C13.6534 4.66683 13.2801 4.66683 12.5333 4.66683L3.46665 4.66683C2.71991 4.66683 2.34654 4.66683 2.06133 4.81215C1.81044 4.93999 1.60647 5.14396 1.47864 5.39484C1.33331 5.68006 1.33331 6.05343 1.33331 6.80016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGift02)
const Gift02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Gift02', props.className].join(' ')}
    />
  )
})
Gift02.displayName = 'IconGift02'
export default Gift02
