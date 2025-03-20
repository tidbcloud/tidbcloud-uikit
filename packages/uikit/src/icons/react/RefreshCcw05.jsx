import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw05 = (props, ref) => {
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
        d="M8.547 19.768A8.5 8.5 0 0 0 19.362 7.75l-.25-.434M4.638 16.25A8.5 8.5 0 0 1 15.453 4.233m-12.96 12.1 2.732.733.733-2.732m12.085-4.668.732-2.732 2.732.732"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw05)
const RefreshCcw05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RefreshCcw05'].join(' ')}
    />
  )
})
RefreshCcw05.displayName = 'IconRefreshCcw05'
export default RefreshCcw05
