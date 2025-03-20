import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVector = (props, ref) => {
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
        d="M13.757 4.929a2.357 2.357 0 1 0-3.514 0m3.514 0A2.35 2.35 0 0 1 12 5.714a2.35 2.35 0 0 1-1.757-.785m3.514 0 5.129 5.5m0 0c-.373.417-.6.967-.6 1.571s.227 1.154.6 1.571m0-3.142a2.357 2.357 0 1 1 0 3.143m0 0-5.13 5.5m0 0A2.35 2.35 0 0 0 12 18.285c-.698 0-1.325.303-1.757.785m3.514 0a2.357 2.357 0 1 1-3.514 0m0 0L4.93 13.757m0 0A2.35 2.35 0 0 0 5.714 12c0-.698-.303-1.325-.785-1.757m0 3.514a2.357 2.357 0 1 1 0-3.514m0 0 5.314-5.314"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVector)
const Vector = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Vector'].join(' ')}
    />
  )
})
Vector.displayName = 'IconVector'
export default Vector
