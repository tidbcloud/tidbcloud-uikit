import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCube03 = (props, ref) => {
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
        d="M3.5 8H16m0 0v12.5M16 8l4.5-4.5m.5 11.837V3.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219C20.62 3 20.48 3 20.2 3H8.663c-.245 0-.367 0-.482.028a1 1 0 0 0-.29.12c-.1.061-.187.148-.36.32L3.47 7.532c-.173.173-.26.26-.322.36a1 1 0 0 0-.12.29C3 8.296 3 8.418 3 8.663V20.2c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 21 3.52 21 3.8 21h11.537c.245 0 .367 0 .482-.028a1 1 0 0 0 .29-.12c.1-.061.187-.148.36-.32l4.062-4.063c.173-.173.26-.26.322-.36a1 1 0 0 0 .12-.29c.027-.115.027-.237.027-.482"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCube03)
const Cube03 = forwardRef((props, ref) => {
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
Cube03.displayName = 'IconCube03'
export default Cube03
