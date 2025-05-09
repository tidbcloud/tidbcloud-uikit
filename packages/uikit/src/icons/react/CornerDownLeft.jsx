import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerDownLeft = (props, ref) => {
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
        d="M13.3333 2.66669V3.60002C13.3333 5.84023 13.3333 6.96034 12.8973 7.81598C12.5138 8.56863 11.9019 9.18055 11.1493 9.56405C10.2936 10 9.1735 10 6.93329 10H2.66663M2.66663 10L5.99996 6.66669M2.66663 10L5.99996 13.3334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerDownLeft)
const CornerDownLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerDownLeft', props.className].join(' ')}
    />
  )
})
CornerDownLeft.displayName = 'IconCornerDownLeft'
export default CornerDownLeft
