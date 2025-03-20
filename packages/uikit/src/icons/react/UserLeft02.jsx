import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserLeft02 = (props, ref) => {
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
        d="m19 9-3-3m0 0 3-3m-3 3h6m-6 15v-1.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C13.72 15 12.88 15 11.2 15H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 17.28 2 18.12 2 19.8V21M12.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserLeft02)
const UserLeft02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'UserLeft02'].join(' ')}
    />
  )
})
UserLeft02.displayName = 'IconUserLeft02'
export default UserLeft02
