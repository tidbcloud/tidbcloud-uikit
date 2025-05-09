import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataflow01 = (props, ref) => {
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
        d="M11.3333 13.3333H11.2C10.0799 13.3333 9.51984 13.3333 9.09202 13.1153C8.71569 12.9235 8.40973 12.6176 8.21799 12.2412C8 11.8134 8 11.2534 8 10.1333V5.86659C8 4.74648 8 4.18643 8.21799 3.7586C8.40973 3.38228 8.71569 3.07632 9.09202 2.88457C9.51984 2.66659 10.0799 2.66659 11.2 2.66659H11.3333M11.3333 13.3333C11.3333 14.0696 11.9303 14.6666 12.6667 14.6666C13.403 14.6666 14 14.0696 14 13.3333C14 12.5969 13.403 11.9999 12.6667 11.9999C11.9303 11.9999 11.3333 12.5969 11.3333 13.3333ZM11.3333 2.66659C11.3333 3.40297 11.9303 3.99992 12.6667 3.99992C13.403 3.99992 14 3.40297 14 2.66659C14 1.93021 13.403 1.33325 12.6667 1.33325C11.9303 1.33325 11.3333 1.93021 11.3333 2.66659ZM4.66667 7.99992L11.3333 7.99992M4.66667 7.99992C4.66667 8.7363 4.06971 9.33325 3.33333 9.33325C2.59695 9.33325 2 8.7363 2 7.99992C2 7.26354 2.59695 6.66659 3.33333 6.66659C4.06971 6.66659 4.66667 7.26354 4.66667 7.99992ZM11.3333 7.99992C11.3333 8.7363 11.9303 9.33325 12.6667 9.33325C13.403 9.33325 14 8.7363 14 7.99992C14 7.26354 13.403 6.66659 12.6667 6.66659C11.9303 6.66659 11.3333 7.26354 11.3333 7.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataflow01)
const Dataflow01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Dataflow01', props.className].join(' ')}
    />
  )
})
Dataflow01.displayName = 'IconDataflow01'
export default Dataflow01
