import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRoute = (props, ref) => {
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
        d="M11.5 5h.434c3.048 0 4.571 0 5.15.547a2 2 0 0 1 .586 1.845c-.156.781-1.4 1.66-3.888 3.42l-4.064 2.876c-2.488 1.76-3.732 2.639-3.888 3.42a2 2 0 0 0 .586 1.845c.579.547 2.102.547 5.15.547h.934M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m14 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRoute)
const Route = forwardRef((props, ref) => {
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
Route.displayName = 'IconRoute'
export default Route
