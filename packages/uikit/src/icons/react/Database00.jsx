import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase00 = (props, ref) => {
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
        d="M14 3.33331C14 4.43788 11.3137 5.33331 8 5.33331C4.68629 5.33331 2 4.43788 2 3.33331M14 3.33331C14 2.22874 11.3137 1.33331 8 1.33331C4.68629 1.33331 2 2.22874 2 3.33331M14 3.33331V12.6666C14 13.7733 11.3333 14.6666 8 14.6666C4.66667 14.6666 2 13.7733 2 12.6666V3.33331"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase00)
const Database00 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database00', props.className].join(' ')}
    />
  )
})
Database00.displayName = 'IconDatabase00'
export default Database00
