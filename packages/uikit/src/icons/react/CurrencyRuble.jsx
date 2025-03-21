import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyRuble = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.5 11.5H14.5C16.7091 11.5 18.5 9.70914 18.5 7.5C18.5 5.29086 16.7091 3.5 14.5 3.5H8.5V11.5ZM8.5 11.5H6.5M13.5 15.5H6.5M8.5 4V20.5"
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
      className={[props.className, 'tiui-icon', 'CurrencyRuble'].join(' ')}
    />
  )
})
CurrencyRuble.displayName = 'IconCurrencyRuble'
export default CurrencyRuble
