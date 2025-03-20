import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoins04 = (props, ref) => {
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
        d="M10.101 4A7 7 0 0 1 20 13.899M7.5 13 9 12v5.5m-1.5 0h3M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoins04)
const Coins04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Coins04'].join(' ')}
    />
  )
})
Coins04.displayName = 'IconCoins04'
export default Coins04
