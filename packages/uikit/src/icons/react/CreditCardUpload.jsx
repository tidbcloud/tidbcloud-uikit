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
      ref={ref}
      {...props}
    >
      <path
        d="M6.00016 10.6665L8.00016 8.6665M8.00016 8.6665L10.0002 10.6665M8.00016 8.6665V13.3332M14.6668 5.99984H1.3335M3.66683 11.9998H3.46683C2.72009 11.9998 2.34672 11.9998 2.06151 11.8545C1.81063 11.7267 1.60665 11.5227 1.47882 11.2718C1.3335 10.9866 1.3335 10.6132 1.3335 9.8665V4.79984C1.3335 4.0531 1.3335 3.67973 1.47882 3.39452C1.60665 3.14363 1.81063 2.93966 2.06151 2.81183C2.34672 2.6665 2.72009 2.6665 3.46683 2.6665H12.5335C13.2802 2.6665 13.6536 2.6665 13.9388 2.81183C14.1897 2.93966 14.3937 3.14363 14.5215 3.39452C14.6668 3.67973 14.6668 4.0531 14.6668 4.79984V9.8665C14.6668 10.6132 14.6668 10.9866 14.5215 11.2718C14.3937 11.5227 14.1897 11.7267 13.9388 11.8545C13.6536 11.9998 13.2802 11.9998 12.5335 11.9998H12.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
