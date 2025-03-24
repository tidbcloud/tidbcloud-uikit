import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M14 3.33325C14 4.43782 11.3137 5.33325 8 5.33325C4.68629 5.33325 2 4.43782 2 3.33325M14 3.33325C14 2.22868 11.3137 1.33325 8 1.33325C4.68629 1.33325 2 2.22868 2 3.33325M14 3.33325V12.6666C14 13.7733 11.3333 14.6666 8 14.6666C4.66667 14.6666 2 13.7733 2 12.6666V3.33325M14 7.99992C14 9.10659 11.3333 9.99992 8 9.99992C4.66667 9.99992 2 9.10659 2 7.99992"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase01)
const Database01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database01', props.className].join(' ')}
    />
  )
})
Database01.displayName = 'IconDatabase01'
export default Database01
