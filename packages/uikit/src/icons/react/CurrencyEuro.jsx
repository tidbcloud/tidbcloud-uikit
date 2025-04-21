import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyEuro = (props, ref) => {
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
        d="M12.6667 3.67952C11.6784 2.83999 10.3983 2.3335 9 2.3335C5.87039 2.3335 3.33333 4.87055 3.33333 8.00016C3.33333 11.1298 5.87039 13.6668 9 13.6668C10.3983 13.6668 11.6784 13.1603 12.6667 12.3208M2 9.3335H8.66667M2 6.66683H8.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'CurrencyEuro', props.className].join(' ')}
    />
  )
})
CurrencyEuro.displayName = 'IconCurrencyEuro'
export default CurrencyEuro
