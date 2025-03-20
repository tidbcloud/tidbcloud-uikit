import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFingerprint02 = (props, ref) => {
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
        d="M12 10v4M7.447 3.421A8 8 0 0 1 20 10v1.237M4.416 7.447A8 8 0 0 0 4 10v4a8 8 0 0 0 5.744 7.677m9.915-5.358a8.02 8.02 0 0 1-4.922 5.2m-.412-15.373A4.5 4.5 0 0 0 7.5 10v2.95m9-1.91V14a4.5 4.5 0 0 1-6.82 3.857"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFingerprint02)
const Fingerprint02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Fingerprint02'].join(' ')}
    />
  )
})
Fingerprint02.displayName = 'IconFingerprint02'
export default Fingerprint02
