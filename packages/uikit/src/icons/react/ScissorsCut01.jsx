import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconScissorsCut01 = (props, ref) => {
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
        d="M20 4 8.5 15.5m0-7L20 20m-2.5-8h.01M22 12h.01M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconScissorsCut01)
const ScissorsCut01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ScissorsCut01'].join(' ')}
    />
  )
})
ScissorsCut01.displayName = 'IconScissorsCut01'
export default ScissorsCut01
