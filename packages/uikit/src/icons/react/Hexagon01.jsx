import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHexagon01 = (props, ref) => {
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
        d="M11.223 2.432c.284-.158.425-.237.575-.267a1 1 0 0 1 .403 0c.15.03.292.11.576.267l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.153.05.324.05.667v8.117c0 .342 0 .514-.05.666a1 1 0 0 1-.215.364c-.109.119-.258.202-.558.368l-7.4 4.111c-.284.158-.425.237-.575.268a1 1 0 0 1-.403 0c-.15-.031-.292-.11-.576-.268l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.06V7.942c0-.343 0-.514.05-.667a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHexagon01)
const Hexagon01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Hexagon01'].join(' ')}
    />
  )
})
Hexagon01.displayName = 'IconHexagon01'
export default Hexagon01
