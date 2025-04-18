import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRedeploy = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 14 14"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.286 1.571v7.715a2.571 2.571 0 0 1-5.143 0v-1.5m5.143-6.215 2.285 2.286M9.286 1.571 7 3.857M5.286 4.861A1.714 1.714 0 1 1 2.86 7.286 1.714 1.714 0 0 1 5.286 4.86"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRedeploy)
const Redeploy = forwardRef((props, ref) => {
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
Redeploy.displayName = 'IconRedeploy'
export default Redeploy
