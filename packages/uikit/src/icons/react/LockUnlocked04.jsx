import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLockUnlocked04 = (props, ref) => {
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
        d="M7 10V8a5 5 0 0 1 9-3m-4 9v2m7-1a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLockUnlocked04)
const LockUnlocked04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LockUnlocked04'].join(' ')}
    />
  )
})
LockUnlocked04.displayName = 'IconLockUnlocked04'
export default LockUnlocked04
