import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardLock = (props, ref) => {
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
        d="M13.5002 11.6668V10.5002C13.5002 9.85583 12.9778 9.3335 12.3335 9.3335C11.6892 9.3335 11.1668 9.85583 11.1668 10.5002V11.6668M14.6668 6.66683H1.3335M14.6668 7.3335V5.46683C14.6668 4.72009 14.6668 4.34673 14.5215 4.06151C14.3937 3.81063 14.1897 3.60665 13.9388 3.47882C13.6536 3.3335 13.2802 3.3335 12.5335 3.3335H3.46683C2.72009 3.3335 2.34672 3.3335 2.06151 3.47882C1.81063 3.60665 1.60665 3.81063 1.47882 4.06151C1.3335 4.34672 1.3335 4.72009 1.3335 5.46683V10.5335C1.3335 11.2802 1.3335 11.6536 1.47882 11.9388C1.60665 12.1897 1.81063 12.3937 2.06151 12.5215C2.34672 12.6668 2.72009 12.6668 3.46683 12.6668H7.3335M11.0668 14.3335H13.6002C13.9735 14.3335 14.1602 14.3335 14.3028 14.2608C14.4283 14.1969 14.5303 14.0949 14.5942 13.9695C14.6668 13.8269 14.6668 13.6402 14.6668 13.2668V12.7335C14.6668 12.3601 14.6668 12.1734 14.5942 12.0308C14.5303 11.9054 14.4283 11.8034 14.3028 11.7395C14.1602 11.6668 13.9735 11.6668 13.6002 11.6668H11.0668C10.6935 11.6668 10.5068 11.6668 10.3642 11.7395C10.2387 11.8034 10.1367 11.9054 10.0728 12.0308C10.0002 12.1734 10.0002 12.3601 10.0002 12.7335V13.2668C10.0002 13.6402 10.0002 13.8269 10.0728 13.9695C10.1367 14.0949 10.2387 14.1969 10.3642 14.2608C10.5068 14.3335 10.6935 14.3335 11.0668 14.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardLock)
const CreditCardLock = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CreditCardLock', props.className].join(' ')}
    />
  )
})
CreditCardLock.displayName = 'IconCreditCardLock'
export default CreditCardLock
