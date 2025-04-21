import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle01Left = (props, ref) => {
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
        d="M4.66665 11.3334H11.3333C13.1743 11.3334 14.6666 9.84097 14.6666 8.00002C14.6666 6.15907 13.1743 4.66669 11.3333 4.66669H4.66665M4.66665 11.3334C2.8257 11.3334 1.33331 9.84097 1.33331 8.00002C1.33331 6.15907 2.8257 4.66669 4.66665 4.66669M4.66665 11.3334C6.5076 11.3334 7.99998 9.84097 7.99998 8.00002C7.99998 6.15907 6.5076 4.66669 4.66665 4.66669"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle01Left)
const Toggle01Left = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle01Left', props.className].join(' ')}
    />
  )
})
Toggle01Left.displayName = 'IconToggle01Left'
export default Toggle01Left
