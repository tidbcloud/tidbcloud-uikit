import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer03 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22 17.5-.692-10.03c-.108-1.575-.163-2.362-.504-2.96a3 3 0 0 0-1.298-1.21C18.887 3 18.098 3 16.52 3H7.48c-1.578 0-2.367 0-2.986.3a3 3 0 0 0-1.298 1.21c-.341.598-.396 1.385-.504 2.96L2 17.5m20 0a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5m20 0a3.5 3.5 0 0 0-3.5-3.5h-13A3.5 3.5 0 0 0 2 17.5m4 0h.01m5.99 0h6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer03)
const Server03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Server03'].join(' ')}
    />
  )
})
Server03.displayName = 'IconServer03'
export default Server03
