import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOctagon = (props, ref) => {
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
        d="M7.391 2.469c.173-.173.26-.26.36-.322a1 1 0 0 1 .29-.12C8.156 2 8.278 2 8.523 2h6.954c.245 0 .367 0 .482.028a1 1 0 0 1 .29.12c.1.061.187.148.36.32l4.922 4.923c.173.173.26.26.322.36q.082.136.12.29c.027.115.027.237.027.482v6.954c0 .245 0 .367-.028.482a1 1 0 0 1-.12.29c-.061.1-.148.187-.32.36l-4.923 4.922c-.173.173-.26.26-.36.322a1 1 0 0 1-.29.12c-.115.027-.237.027-.482.027H8.523c-.245 0-.367 0-.482-.028a1 1 0 0 1-.29-.12c-.1-.061-.187-.148-.36-.32L2.47 16.608c-.173-.173-.26-.26-.322-.36a1 1 0 0 1-.12-.29C2 15.844 2 15.722 2 15.477V8.523c0-.245 0-.367.028-.482a1 1 0 0 1 .12-.29c.061-.1.148-.187.32-.36z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconOctagon)
const Octagon = forwardRef((props, ref) => {
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
Octagon.displayName = 'IconOctagon'
export default Octagon
