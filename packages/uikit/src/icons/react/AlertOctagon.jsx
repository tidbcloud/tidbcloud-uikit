import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlertOctagon = (props, ref) => {
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
        d="M12 8v4m0 4h.01M2 8.523v6.954c0 .245 0 .367.028.482a1 1 0 0 0 .12.29c.061.1.148.187.32.36l4.923 4.922c.173.173.26.26.36.322q.136.082.29.12c.115.027.237.027.482.027h6.954c.245 0 .367 0 .482-.028a1 1 0 0 0 .29-.12c.1-.061.187-.148.36-.32l4.922-4.923c.173-.173.26-.26.322-.36a1 1 0 0 0 .12-.29c.027-.115.027-.237.027-.482V8.523c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L16.608 2.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C15.844 2 15.722 2 15.477 2H8.523c-.245 0-.367 0-.482.028a1 1 0 0 0-.29.12c-.1.061-.187.148-.36.32L2.47 7.392c-.173.173-.26.26-.322.36a1 1 0 0 0-.12.29C2 8.156 2 8.278 2 8.523"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlertOctagon)
const AlertOctagon = forwardRef((props, ref) => {
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
AlertOctagon.displayName = 'IconAlertOctagon'
export default AlertOctagon
