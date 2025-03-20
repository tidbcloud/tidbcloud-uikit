import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer05 = (props, ref) => {
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
        d="M19 9a7 7 0 0 1-7 7m7-7a7 7 0 0 0-7-7m7 7H5m7 7a7 7 0 0 1-7-7m7 7a10.7 10.7 0 0 0 2.8-7A10.7 10.7 0 0 0 12 2m0 14a10.7 10.7 0 0 1-2.8-7A10.7 10.7 0 0 1 12 2m0 14v2M5 9a7 7 0 0 1 7-7m2 18a2 2 0 1 1-4 0m4 0a2 2 0 0 0-2-2m2 2h7m-11 0a2 2 0 0 1 2-2m-2 2H3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer05)
const Server05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Server05'].join(' ')}
    />
  )
})
Server05.displayName = 'IconServer05'
export default Server05
