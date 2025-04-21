import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMoonEclipse = (props, ref) => {
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
        d="M13.3345 4.00031C15.1111 6.36353 15.1108 9.6387 13.3334 12.0015M8.00004 14.6668C9.04741 14.6668 10.0384 14.4253 10.9203 13.9949C10.8362 13.9984 10.7516 14.0002 10.6667 14.0002C7.353 14.0002 4.66671 11.3139 4.66671 8.00016C4.66671 4.68645 7.353 2.00016 10.6667 2.00016C10.7516 2.00016 10.8362 2.00193 10.9203 2.00542C10.0384 1.57502 9.04741 1.3335 8.00004 1.3335C4.31814 1.3335 1.33337 4.31826 1.33337 8.00016C1.33337 11.6821 4.31814 14.6668 8.00004 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMoonEclipse)
const MoonEclipse = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MoonEclipse', props.className].join(' ')}
    />
  )
})
MoonEclipse.displayName = 'IconMoonEclipse'
export default MoonEclipse
