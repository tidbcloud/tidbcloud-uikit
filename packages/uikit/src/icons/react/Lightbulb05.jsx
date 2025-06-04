import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightbulb05 = (props, ref) => {
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
        d="M7.99992 1.33325V1.99992M1.99992 7.99992H1.33325M3.66659 3.66659L3.26652 3.26652M12.3333 3.66659L12.7334 3.26652M14.6666 7.99992H13.9999M6.66659 8.99992H9.33325M7.99992 8.99992V12.3333M10.3333 11.2492C11.3426 10.5231 11.9999 9.33827 11.9999 7.99992C11.9999 5.79078 10.2091 3.99992 7.99992 3.99992C5.79078 3.99992 3.99992 5.79078 3.99992 7.99992C3.99992 9.33827 4.65721 10.5231 5.66659 11.2492V12.5333C5.66659 13.28 5.66659 13.6534 5.81191 13.9386C5.93974 14.1895 6.14372 14.3934 6.3946 14.5213C6.67981 14.6666 7.05318 14.6666 7.79992 14.6666H8.19992C8.94666 14.6666 9.32002 14.6666 9.60524 14.5213C9.85612 14.3934 10.0601 14.1895 10.1879 13.9386C10.3333 13.6534 10.3333 13.28 10.3333 12.5333V11.2492Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightbulb05)
const Lightbulb05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lightbulb05', props.className].join(' ')}
    />
  )
})
Lightbulb05.displayName = 'IconLightbulb05'
export default Lightbulb05
