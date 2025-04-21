import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardX = (props, ref) => {
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
        d="M11 10.6668L14.3333 14.0002M14.3333 10.6668L11 14.0002M14.6667 6.66683H1.33334M14.6667 8.00016V5.46683C14.6667 4.72009 14.6667 4.34673 14.5214 4.06151C14.3935 3.81063 14.1895 3.60665 13.9387 3.47882C13.6534 3.3335 13.2801 3.3335 12.5333 3.3335H3.46668C2.71994 3.3335 2.34657 3.3335 2.06136 3.47882C1.81047 3.60665 1.6065 3.81063 1.47867 4.06151C1.33334 4.34672 1.33334 4.72009 1.33334 5.46683V10.5335C1.33334 11.2802 1.33334 11.6536 1.47867 11.9388C1.6065 12.1897 1.81047 12.3937 2.06136 12.5215C2.34657 12.6668 2.71994 12.6668 3.46668 12.6668H8.00001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardX)
const CreditCardX = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CreditCardX', props.className].join(' ')}
    />
  )
})
CreditCardX.displayName = 'IconCreditCardX'
export default CreditCardX
