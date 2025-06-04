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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.66665 7.66683H9.66665C11.1394 7.66683 12.3333 6.47292 12.3333 5.00016C12.3333 3.5274 11.1394 2.3335 9.66665 2.3335H5.66665V7.66683ZM5.66665 7.66683H4.33331M8.99998 10.3335H4.33331M5.66665 2.66683V13.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
