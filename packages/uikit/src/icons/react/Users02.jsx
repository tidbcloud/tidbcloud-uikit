import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsers02 = (props, ref) => {
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
        d="M16 3.468a4.5 4.5 0 0 1 0 8.064m2 5.234c1.512.684 2.872 1.799 4 3.234M2 20c1.946-2.477 4.59-4 7.5-4s5.554 1.523 7.5 4M14 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsers02)
const Users02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Users02'].join(' ')}
    />
  )
})
Users02.displayName = 'IconUsers02'
export default Users02
