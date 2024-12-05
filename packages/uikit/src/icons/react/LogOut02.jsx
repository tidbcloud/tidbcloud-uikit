import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogOut02 = (props, ref) => {
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
        d="m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C9.395 21 8.93 21 8 21h-.5c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C3 18.597 3 17.898 3 16.5v-9c0-1.398 0-2.097.228-2.648a3 3 0 0 1 1.624-1.624C5.403 3 6.102 3 7.5 3H8c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C12 5.605 12 6.07 12 7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogOut02)
const LogOut02 = forwardRef((props, ref) => {
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
LogOut02.displayName = 'IconLogOut02'
export default LogOut02
