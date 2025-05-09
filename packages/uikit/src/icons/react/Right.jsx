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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M2.66675 8.44444L5.08245 11.3522C5.11297 11.389 5.14605 11.4232 5.17915 11.4577C5.34049 11.6255 5.65556 12 5.9488 12C6.24943 12 6.68774 11.5028 6.75927 11.4193C6.76619 11.4112 6.77284 11.4034 6.77989 11.3955L13.3334 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
