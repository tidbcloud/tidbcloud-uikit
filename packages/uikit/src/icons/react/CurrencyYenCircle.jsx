import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyYenCircle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18v-6m0 0 4-5m-4 5L8 7m8 5H8m7.5 3h-7M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyYenCircle)
const CurrencyYenCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CurrencyYenCircle'].join(' ')}
    />
  )
})
CurrencyYenCircle.displayName = 'IconCurrencyYenCircle'
export default CurrencyYenCircle
