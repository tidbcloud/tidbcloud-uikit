import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardEdit = (props, ref) => {
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
        d="M1.33334 6.66683H14.6667V5.46683C14.6667 4.72009 14.6667 4.34673 14.5214 4.06151C14.3935 3.81063 14.1895 3.60665 13.9387 3.47882C13.6534 3.3335 13.2801 3.3335 12.5333 3.3335H3.46668C2.71994 3.3335 2.34657 3.3335 2.06136 3.47882C1.81047 3.60665 1.6065 3.81063 1.47867 4.06151C1.33334 4.34672 1.33334 4.72009 1.33334 5.46683V10.5335C1.33334 11.2802 1.33334 11.6536 1.47867 11.9388C1.6065 12.1897 1.81047 12.3937 2.06136 12.5215C2.34657 12.6668 2.71994 12.6668 3.46668 12.6668H7.33334M9.66668 14.0002L11.0167 13.7302C11.1344 13.7066 11.1932 13.6949 11.2481 13.6733C11.2968 13.6542 11.3431 13.6294 11.386 13.5995C11.4344 13.5658 11.4768 13.5233 11.5617 13.4385L14.3333 10.6668C14.7015 10.2986 14.7015 9.70169 14.3333 9.3335C13.9652 8.96531 13.3682 8.96531 13 9.3335L10.2284 12.1051C10.1435 12.19 10.1011 12.2325 10.0673 12.2808C10.0374 12.3237 10.0126 12.37 9.99351 12.4187C9.97199 12.4736 9.96021 12.5325 9.93667 12.6502L9.66668 14.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardEdit)
const CreditCardEdit = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CreditCardEdit', props.className].join(' ')}
    />
  )
})
CreditCardEdit.displayName = 'IconCreditCardEdit'
export default CreditCardEdit
