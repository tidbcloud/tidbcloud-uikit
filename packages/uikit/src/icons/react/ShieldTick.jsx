import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShieldTick = (props, ref) => {
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
        d="M6.00033 7.66691L7.33366 9.00024L10.3337 6.00024M13.3337 8.00024C13.3337 11.2725 9.76435 13.6525 8.46565 14.4102C8.31806 14.4963 8.24426 14.5393 8.14011 14.5617C8.05929 14.579 7.94136 14.579 7.86054 14.5617C7.75639 14.5393 7.68259 14.4963 7.535 14.4102C6.2363 13.6525 2.66699 11.2725 2.66699 8.00024V4.81197C2.66699 4.27897 2.66699 4.01246 2.75417 3.78338C2.83118 3.581 2.95631 3.40042 3.11876 3.25726C3.30266 3.0952 3.55219 3.00162 4.05126 2.81447L7.62579 1.47402C7.76439 1.42205 7.83369 1.39606 7.90498 1.38576C7.96822 1.37662 8.03243 1.37662 8.09567 1.38576C8.16696 1.39606 8.23626 1.42205 8.37486 1.47402L11.9494 2.81447C12.4485 3.00162 12.698 3.0952 12.8819 3.25726C13.0443 3.40042 13.1695 3.581 13.2465 3.78338C13.3337 4.01246 13.3337 4.27897 13.3337 4.81197V8.00024Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShieldTick)
const ShieldTick = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ShieldTick', props.className].join(' ')}
    />
  )
})
ShieldTick.displayName = 'IconShieldTick'
export default ShieldTick
