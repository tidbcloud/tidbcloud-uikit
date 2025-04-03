import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShieldOff = (props, ref) => {
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
        d="M5.87245 2.1314L7.62547 1.47402C7.76407 1.42205 7.83336 1.39606 7.90466 1.38576C7.96789 1.37662 8.03211 1.37662 8.09534 1.38576C8.16664 1.39606 8.23593 1.42205 8.37453 1.47402L11.9491 2.81447C12.4481 3.00162 12.6977 3.0952 12.8816 3.25726C13.044 3.40042 13.1692 3.581 13.2462 3.78338C13.3333 4.01246 13.3333 4.27897 13.3333 4.81197V8.00024C13.3333 8.48044 13.2565 8.94143 13.1212 9.38089M11.7479 11.7507C10.6241 13.0576 9.19193 13.9862 8.46642 14.4095C8.31814 14.496 8.244 14.5393 8.13985 14.5616C8.05902 14.579 7.94107 14.579 7.86025 14.5617C7.75609 14.5393 7.68228 14.4963 7.53467 14.4102C6.23597 13.6525 2.66667 11.2725 2.66667 8.00024V3.85111C2.66667 3.53981 2.85977 3.26116 3.15126 3.15185M2 2.00024L14 14.0002"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShieldOff)
const ShieldOff = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ShieldOff', props.className].join(' ')}
    />
  )
})
ShieldOff.displayName = 'IconShieldOff'
export default ShieldOff
