import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyRuble = (props, ref) => {
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
        d="M5.66683 7.66683H9.66683C11.1396 7.66683 12.3335 6.47292 12.3335 5.00016C12.3335 3.5274 11.1396 2.3335 9.66683 2.3335H5.66683V7.66683ZM5.66683 7.66683H4.3335M9.00016 10.3335H4.3335M5.66683 2.66683V13.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyRuble)
const CurrencyRuble = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CurrencyRuble', props.className].join(' ')}
    />
  )
})
CurrencyRuble.displayName = 'IconCurrencyRuble'
export default CurrencyRuble
