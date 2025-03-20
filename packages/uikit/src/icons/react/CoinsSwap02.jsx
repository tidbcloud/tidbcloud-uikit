import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsSwap02 = (props, ref) => {
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
        d="m6 6 2-2m0 0L6 2m2 2H6a4 4 0 0 0-4 4m16 10-2 2m0 0 2 2m-2-2h2a4 4 0 0 0 4-4M10.189 6.5a6 6 0 1 1 7.311 7.311M14 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsSwap02)
const CoinsSwap02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CoinsSwap02'].join(' ')}
    />
  )
})
CoinsSwap02.displayName = 'IconCoinsSwap02'
export default CoinsSwap02
