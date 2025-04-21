import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeedometer03 = (props, ref) => {
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
        d="M3.33331 7.99998C3.33331 5.42265 5.42265 3.33331 7.99998 3.33331M10.9999 4.99998L7.99992 7.99998M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998ZM8.66665 7.99998C8.66665 8.36817 8.36817 8.66665 7.99998 8.66665C7.63179 8.66665 7.33331 8.36817 7.33331 7.99998C7.33331 7.63179 7.63179 7.33331 7.99998 7.33331C8.36817 7.33331 8.66665 7.63179 8.66665 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeedometer03)
const Speedometer03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Speedometer03', props.className].join(' ')}
    />
  )
})
Speedometer03.displayName = 'IconSpeedometer03'
export default Speedometer03
