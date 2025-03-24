import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRedeploy = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M9.28557 1.57129L9.28557 9.28558C9.28557 10.7057 8.13431 11.857 6.71415 11.857C5.29399 11.857 4.14272 10.7057 4.14272 9.28558L4.14272 7.78628M9.28557 1.57129L11.5713 3.857M9.28557 1.57129L6.99986 3.857M5.28557 4.86121C5.95504 5.53068 5.95504 6.61611 5.28557 7.28558C4.6161 7.95505 3.53068 7.95505 2.86121 7.28558C2.19174 6.61611 2.19174 5.53068 2.86121 4.86121C3.53068 4.19174 4.6161 4.19174 5.28557 4.86121Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'Redeploy', props.className].join(' ')}
    />
  )
})
Redeploy.displayName = 'IconRedeploy'
export default Redeploy
