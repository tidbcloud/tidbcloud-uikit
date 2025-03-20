import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer06 = (props, ref) => {
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
        d="M20 12a8 8 0 0 1-8 8m8-8a8 8 0 0 0-8-8m8 8H4m8 8a8 8 0 0 1-8-8m8 8a12.24 12.24 0 0 0 3.2-8A12.24 12.24 0 0 0 12 4m0 16a12.24 12.24 0 0 1-3.2-8A12.24 12.24 0 0 1 12 4m-8 8a8 8 0 0 1 8-8M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer06)
const Server06 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Server06'].join(' ')}
    />
  )
})
Server06.displayName = 'IconServer06'
export default Server06
