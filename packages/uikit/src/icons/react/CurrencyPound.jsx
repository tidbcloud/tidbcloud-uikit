import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCurrencyPound = (props, ref) => {
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
        d="M11.6666 13.6668H4.33331C4.33331 13.6668 6.66665 11.8277 6.66665 9.00016C6.66665 7.11515 5.27582 6.44099 5.25578 4.87014C5.25708 1.76068 9.00031 1.92601 10.3014 3.16189M4.33331 9.00016H9.99998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCurrencyPound)
const CurrencyPound = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CurrencyPound', props.className].join(' ')}
    />
  )
})
CurrencyPound.displayName = 'IconCurrencyPound'
export default CurrencyPound
