import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEuro = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 5.51903C17.5176 4.25973 15.5975 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12C5 16.6944 8.80558 20.5 13.5 20.5C15.5975 20.5 17.5176 19.7403 19 18.481M3 14H13M3 10H13"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyEuro)
const CurrencyEuro = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyEuro'].join(' ')}
    />
  )
})
CurrencyEuro.displayName = 'IconCurrencyEuro'
export default CurrencyEuro
