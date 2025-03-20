import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCodeCircle03 = (props, ref) => {
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
          strokeLinejoin="round"
          d="m10.334 10 2-2-2-2M5.667 6l-2 2 2 2m3-5.333-1.333 6.667M14.667 8A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0"
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
const ForwardRef = forwardRef(IconCodeCircle03)
const CodeCircle03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CodeCircle03'].join(' ')}
    />
  )
})
CodeCircle03.displayName = 'IconCodeCircle03'
export default CodeCircle03
