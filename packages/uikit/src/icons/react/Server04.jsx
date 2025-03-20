import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer04 = (props, ref) => {
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
        d="m22 10.5-.474-3.795c-.186-1.489-.28-2.233-.63-2.794a3 3 0 0 0-1.283-1.133c-.6-.278-1.35-.278-2.85-.278H7.237c-1.5 0-2.25 0-2.85.278a3 3 0 0 0-1.283 1.133c-.35.56-.444 1.305-.63 2.794L2 10.5m3.5 4h13m-13 0a3.5 3.5 0 1 1 0-7h13a3.5 3.5 0 1 1 0 7m-13 0a3.5 3.5 0 1 0 0 7h13a3.5 3.5 0 1 0 0-7M6 11h.01M6 18h.01M12 11h6m-6 7h6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer04)
const Server04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Server04'].join(' ')}
    />
  )
})
Server04.displayName = 'IconServer04'
export default Server04
