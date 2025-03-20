import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloud03 = (props, ref) => {
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
        d="M9.5 19a7.5 7.5 0 1 1 6.641-10.988Q16.319 8 16.5 8a5.5 5.5 0 1 1 0 11z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloud03)
const Cloud03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Cloud03'].join(' ')}
    />
  )
})
Cloud03.displayName = 'IconCloud03'
export default Cloud03
