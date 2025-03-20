import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw01 = (props, ref) => {
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
        d="M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw01)
const RefreshCcw01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RefreshCcw01'].join(' ')}
    />
  )
})
RefreshCcw01.displayName = 'IconRefreshCcw01'
export default RefreshCcw01
