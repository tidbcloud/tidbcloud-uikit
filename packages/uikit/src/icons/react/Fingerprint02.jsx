import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFingerprint02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00008 6.66659V9.33325M4.96483 2.28061C5.82635 1.68327 6.87234 1.33325 8.00008 1.33325C10.9456 1.33325 13.3334 3.72107 13.3334 6.66659V7.49103M2.94429 4.96397C2.7643 5.49865 2.66675 6.07122 2.66675 6.66659V9.33325C2.66675 11.7565 4.28286 13.8023 6.49605 14.4516M13.106 10.8791C12.6196 12.4875 11.3941 13.775 9.82458 14.3463M9.55005 4.09749C9.09769 3.82398 8.56726 3.66659 8.00008 3.66659C6.34323 3.66659 5.00008 5.00973 5.00008 6.66659V8.63325M11.0001 7.35992V9.33325C11.0001 10.9901 9.65693 12.3333 8.00008 12.3333C7.43431 12.3333 6.90513 12.1766 6.45351 11.9044"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Fingerprint02', props.className].join(' ')}
    />
  )
})
Fingerprint02.displayName = 'IconFingerprint02'
export default Fingerprint02
