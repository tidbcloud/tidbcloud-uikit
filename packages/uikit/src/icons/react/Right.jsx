import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRight = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M2.66699 8.44444L5.08269 11.3522C5.11321 11.389 5.1463 11.4232 5.17939 11.4577C5.34074 11.6255 5.65581 12 5.94904 12C6.24967 12 6.68798 11.5028 6.75952 11.4193C6.76643 11.4112 6.77308 11.4034 6.78013 11.3955L13.3337 4"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRight)
const Right = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Right', props.className].join(' ')}
    />
  )
})
Right.displayName = 'IconRight'
export default Right
