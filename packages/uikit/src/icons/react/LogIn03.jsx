import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogIn03 = (props, ref) => {
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
        d="M4 11.3333C4 11.5675 4 11.6846 4.01045 11.7864C4.09716 12.6316 4.7084 13.3298 5.53471 13.5274C5.63423 13.5512 5.75034 13.5667 5.98246 13.5977L10.3771 14.1836C11.628 14.3504 12.2535 14.4338 12.739 14.2408C13.1652 14.0713 13.5202 13.7605 13.7445 13.3604C14 12.9047 14 12.2737 14 11.0117V4.98831C14 3.72629 14 3.09527 13.7445 2.63959C13.5202 2.23951 13.1652 1.92869 12.739 1.75922C12.2535 1.56619 11.628 1.64959 10.3771 1.81638L5.98246 2.40233C5.75031 2.43329 5.63423 2.44876 5.53471 2.47257C4.7084 2.67023 4.09716 3.36838 4.01044 4.21356C4 4.31536 4 4.43246 4 4.66666M8 5.33333L10.6667 8M10.6667 8L8 10.6667M10.6667 8H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogIn03)
const LogIn03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogIn03', props.className].join(' ')}
    />
  )
})
LogIn03.displayName = 'IconLogIn03'
export default LogIn03
