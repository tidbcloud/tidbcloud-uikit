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
      ref={ref}
      {...props}
    >
      <path
        d="M11.6668 13.6668H4.3335C4.3335 13.6668 6.66683 11.8277 6.66683 9.00016C6.66683 7.11515 5.276 6.44099 5.25597 4.87014C5.25727 1.76068 9.00049 1.92601 10.3016 3.16189M4.3335 9.00016H10.0002"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
