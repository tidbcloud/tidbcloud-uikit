import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEthereum = (props, ref) => {
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
        d="M2.6665 7.3336L7.99984 8.66683L13.3332 7.3335M2.6665 7.3336L7.99984 1.3335M2.6665 7.3336L7.99984 6.00022M13.3332 7.3335L7.99984 1.3335M13.3332 7.3335L7.99984 6.00022M7.99984 1.3335V6.00022M3.6665 10.0002L7.99992 14.6668L12.3332 10.0002L7.99984 11.0002L3.6665 10.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyEthereum)
const CurrencyEthereum = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CurrencyEthereum', props.className].join(' ')}
    />
  )
})
CurrencyEthereum.displayName = 'IconCurrencyEthereum'
export default CurrencyEthereum
