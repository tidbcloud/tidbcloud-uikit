import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNumberic = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#prefix__a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="M1.334 4.975h13.333M1.334 10.992h13.333M5.99 1.333 3.673 14.667m8.243-13.334L9.6 14.667"
          strokeWidth="inherit"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h16v16H0z" strokeWidth="inherit" stroke="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconNumberic)
const Numberic = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Numberic.displayName = 'IconNumberic'
export default Numberic
