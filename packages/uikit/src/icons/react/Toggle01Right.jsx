import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle01Right = (props, ref) => {
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
        d="M11.3333 11.3333H4.66665C2.8257 11.3333 1.33331 9.84091 1.33331 7.99996C1.33331 6.15901 2.8257 4.66663 4.66665 4.66663H11.3333M11.3333 11.3333C13.1743 11.3333 14.6666 9.84091 14.6666 7.99996C14.6666 6.15901 13.1743 4.66663 11.3333 4.66663M11.3333 11.3333C9.49236 11.3333 7.99998 9.84091 7.99998 7.99996C7.99998 6.15901 9.49236 4.66663 11.3333 4.66663"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle01Right)
const Toggle01Right = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle01Right', props.className].join(' ')}
    />
  )
})
Toggle01Right.displayName = 'IconToggle01Right'
export default Toggle01Right
