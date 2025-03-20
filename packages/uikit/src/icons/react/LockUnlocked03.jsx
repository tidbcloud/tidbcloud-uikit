import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLockUnlocked03 = (props, ref) => {
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
        d="M7 11V8a5 5 0 0 1 9.9-1M8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2v-.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 11 16.88 11 15.2 11H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 13.28 4 14.12 4 15.8v.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 21 7.12 21 8.8 21"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLockUnlocked03)
const LockUnlocked03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LockUnlocked03'].join(' ')}
    />
  )
})
LockUnlocked03.displayName = 'IconLockUnlocked03'
export default LockUnlocked03
