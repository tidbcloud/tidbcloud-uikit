import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDice5 = (props, ref) => {
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
        d="M16.25 7.75h.005m-.005 8.5h.005M7.75 7.75h.005m4.245 4h.005m-4.255 4.5h.005M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21m8.7-13.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m0 8.5a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0M8 7.75a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m4.25 4a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0M8 16.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDice5)
const Dice5 = forwardRef((props, ref) => {
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
Dice5.displayName = 'IconDice5'
export default Dice5
