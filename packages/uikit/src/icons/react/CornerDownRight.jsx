import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerDownRight = (props, ref) => {
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
        d="M2.66663 2.66669V3.60002C2.66663 5.84023 2.66663 6.96034 3.1026 7.81598C3.48609 8.56863 4.09802 9.18055 4.85066 9.56405C5.70631 10 6.82642 10 9.06663 10H13.3333M13.3333 10L9.99996 6.66669M13.3333 10L9.99996 13.3334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerDownRight)
const CornerDownRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerDownRight', props.className].join(' ')}
    />
  )
})
CornerDownRight.displayName = 'IconCornerDownRight'
export default CornerDownRight
