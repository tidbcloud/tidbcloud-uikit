import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyDollar = (props, ref) => {
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
        d="M4 10.6668C4 12.1396 5.19391 13.3335 6.66667 13.3335H9.33333C10.8061 13.3335 12 12.1396 12 10.6668C12 9.19407 10.8061 8.00016 9.33333 8.00016H6.66667C5.19391 8.00016 4 6.80626 4 5.3335C4 3.86074 5.19391 2.66683 6.66667 2.66683H9.33333C10.8061 2.66683 12 3.86074 12 5.3335M8 1.3335V14.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyDollar)
const CurrencyDollar = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CurrencyDollar', props.className].join(' ')}
    />
  )
})
CurrencyDollar.displayName = 'IconCurrencyDollar'
export default CurrencyDollar
