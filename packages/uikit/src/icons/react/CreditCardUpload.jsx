import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardUpload = (props, ref) => {
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
        d="M6.00001 10.6665L8.00001 8.6665M8.00001 8.6665L10 10.6665M8.00001 8.6665V13.3332M14.6667 5.99984H1.33334M3.66668 11.9998H3.46668C2.71994 11.9998 2.34657 11.9998 2.06136 11.8545C1.81047 11.7267 1.6065 11.5227 1.47867 11.2718C1.33334 10.9866 1.33334 10.6132 1.33334 9.8665V4.79984C1.33334 4.0531 1.33334 3.67973 1.47867 3.39452C1.6065 3.14363 1.81047 2.93966 2.06136 2.81183C2.34657 2.6665 2.71994 2.6665 3.46668 2.6665H12.5333C13.2801 2.6665 13.6534 2.6665 13.9387 2.81183C14.1895 2.93966 14.3935 3.14363 14.5214 3.39452C14.6667 3.67973 14.6667 4.0531 14.6667 4.79984V9.8665C14.6667 10.6132 14.6667 10.9866 14.5214 11.2718C14.3935 11.5227 14.1895 11.7267 13.9387 11.8545C13.6534 11.9998 13.2801 11.9998 12.5333 11.9998H12.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardUpload)
const CreditCardUpload = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CreditCardUpload', props.className].join(' ')}
    />
  )
})
CreditCardUpload.displayName = 'IconCreditCardUpload'
export default CreditCardUpload
