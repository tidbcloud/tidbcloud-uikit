import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardShield = (props, ref) => {
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
        d="M14.6668 6.66683H1.3335M14.6668 7.3335V5.46683C14.6668 4.72009 14.6668 4.34673 14.5215 4.06151C14.3937 3.81063 14.1897 3.60665 13.9388 3.47882C13.6536 3.3335 13.2802 3.3335 12.5335 3.3335H3.46683C2.72009 3.3335 2.34672 3.3335 2.06151 3.47882C1.81063 3.60665 1.60665 3.81063 1.47882 4.06151C1.3335 4.34672 1.3335 4.72009 1.3335 5.46683V10.5335C1.3335 11.2802 1.3335 11.6536 1.47882 11.9388C1.60665 12.1897 1.81063 12.3937 2.06151 12.5215C2.34672 12.6668 2.72009 12.6668 3.46683 12.6668H7.66683M12.0002 14.0002C12.0002 14.0002 14.0002 13.0469 14.0002 11.617V9.94875L12.5418 9.42763C12.1914 9.30212 11.8082 9.30212 11.4578 9.42763L10.0002 9.94875V11.617C10.0002 13.0469 12.0002 14.0002 12.0002 14.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardShield)
const CreditCardShield = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CreditCardShield', props.className].join(' ')}
    />
  )
})
CreditCardShield.displayName = 'IconCreditCardShield'
export default CreditCardShield
