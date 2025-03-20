import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked03 = (props, ref) => {
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
        d="M13 5c0 1.105-2.462 2-5.5 2S2 6.105 2 5m11 0c0-1.105-2.462-2-5.5-2S2 3.895 2 5m11 0v1.5M2 5v12c0 1.105 2.462 2 5.5 2m0-8q-.253 0-.5-.008C4.197 10.9 2 10.043 2 9m5.5 6C4.462 15 2 14.105 2 13m20-1.5c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2m11 0c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2m11 0V19c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2v-7.5m11 3.75c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked03)
const CoinsStacked03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CoinsStacked03'].join(' ')}
    />
  )
})
CoinsStacked03.displayName = 'IconCoinsStacked03'
export default CoinsStacked03
