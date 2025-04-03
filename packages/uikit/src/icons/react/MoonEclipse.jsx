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
      ref={ref}
      {...props}
    >
      <path
        d="M13.3347 4.00031C15.1113 6.36353 15.1109 9.6387 13.3335 12.0015M8.00016 14.6668C9.04754 14.6668 10.0385 14.4253 10.9204 13.9949C10.8363 13.9984 10.7518 14.0002 10.6668 14.0002C7.35312 14.0002 4.66683 11.3139 4.66683 8.00016C4.66683 4.68645 7.35312 2.00016 10.6668 2.00016C10.7518 2.00016 10.8363 2.00193 10.9204 2.00542C10.0385 1.57502 9.04754 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
