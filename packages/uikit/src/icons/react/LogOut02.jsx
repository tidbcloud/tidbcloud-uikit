import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogOut02 = (props, ref) => {
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
        d="M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6M8 11.3333C8 11.9533 8 12.2633 7.93185 12.5176C7.74692 13.2078 7.20782 13.7469 6.51764 13.9319C6.26331 14 5.95332 14 5.33333 14H5C4.06812 14 3.60218 14 3.23463 13.8478C2.74458 13.6448 2.35523 13.2554 2.15224 12.7654C2 12.3978 2 11.9319 2 11V5C2 4.06812 2 3.60218 2.15224 3.23463C2.35523 2.74458 2.74458 2.35523 3.23463 2.15224C3.60218 2 4.06812 2 5 2H5.33333C5.95332 2 6.26331 2 6.51764 2.06815C7.20782 2.25308 7.74692 2.79218 7.93185 3.48236C8 3.7367 8 4.04669 8 4.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogOut02)
const LogOut02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogOut02', props.className].join(' ')}
    />
  )
})
LogOut02.displayName = 'IconLogOut02'
export default LogOut02
