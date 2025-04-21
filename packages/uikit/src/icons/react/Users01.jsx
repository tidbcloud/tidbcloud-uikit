import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsers01 = (props, ref) => {
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
        d="M14.6667 14V12.6667C14.6667 11.4241 13.8169 10.38 12.6667 10.084M10.3334 2.19384C11.3107 2.58943 12 3.54754 12 4.66667C12 5.78579 11.3107 6.7439 10.3334 7.13949M11.3334 14C11.3334 12.7575 11.3334 12.1362 11.1304 11.6462C10.8597 10.9928 10.3406 10.4736 9.6872 10.203C9.19714 10 8.57589 10 7.33337 10H5.33337C4.09086 10 3.46961 10 2.97955 10.203C2.32614 10.4736 1.80701 10.9928 1.53636 11.6462C1.33337 12.1362 1.33337 12.7575 1.33337 14M9.00004 4.66667C9.00004 6.13943 7.80613 7.33333 6.33337 7.33333C4.86061 7.33333 3.66671 6.13943 3.66671 4.66667C3.66671 3.19391 4.86061 2 6.33337 2C7.80613 2 9.00004 3.19391 9.00004 4.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsers01)
const Users01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Users01', props.className].join(' ')}
    />
  )
})
Users01.displayName = 'IconUsers01'
export default Users01
