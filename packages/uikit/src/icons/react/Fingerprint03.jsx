import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFingerprint03 = (props, ref) => {
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
        d="M8.1 21.221a12.16 12.16 0 0 1-2.207-7.002 6.11 6.11 0 0 1 6.106-6.11 6.11 6.11 0 0 1 6.106 6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.1 21.221a12.16 12.16 0 0 1-2.207-7.002 6.11 6.11 0 0 1 6.106-6.11 6.11 6.11 0 0 1 6.106 6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.436 20.312c-.11.006-.218.016-.329.016a6.11 6.11 0 0 1-6.106-6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.436 20.312c-.11.006-.218.016-.329.016a6.11 6.11 0 0 1-6.106-6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.27 22a9.16 9.16 0 0 1-4.323-7.781 3.054 3.054 0 1 1 6.107 0 3.054 3.054 0 1 0 6.108 0c0-5.062-4.102-9.164-9.16-9.164-5.059 0-9.16 4.102-9.16 9.164 0 1.128.126 2.226.358 3.286"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.27 22a9.16 9.16 0 0 1-4.323-7.781 3.054 3.054 0 1 1 6.107 0 3.054 3.054 0 1 0 6.108 0c0-5.062-4.102-9.164-9.16-9.164-5.059 0-9.16 4.102-9.16 9.164 0 1.128.126 2.226.358 3.286"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.526 5.863A11.33 11.33 0 0 0 12 2a11.33 11.33 0 0 0-8.525 3.863"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.526 5.863A11.33 11.33 0 0 0 12 2a11.33 11.33 0 0 0-8.525 3.863"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFingerprint03)
const Fingerprint03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Fingerprint03'].join(' ')}
    />
  )
})
Fingerprint03.displayName = 'IconFingerprint03'
export default Fingerprint03
