import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVariable = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.27 14a13.5 13.5 0 0 0 1.397-6c0-2.155-.503-4.193-1.396-6M2.729 2a13.5 13.5 0 0 0-1.396 6c0 2.155.503 4.193 1.396 6m8.304-8.25h-.06c-.436 0-.85.191-1.133.524l-3.583 4.202A1.49 1.49 0 0 1 5.124 11h-.06m.746-5.25h.93c.333 0 .625.222.717.544l1.183 4.162a.75.75 0 0 0 .717.544h.93"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVariable)
const Variable = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Variable.displayName = 'IconVariable'
export default Variable
