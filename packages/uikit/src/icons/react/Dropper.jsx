import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDropper = (props, ref) => {
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
        d="M6.99992 4.33337L11.6666 9.00004M1.33325 14.6667C1.33325 14.6667 4.33325 14.3334 5.99992 12.6667L13.9999 4.66671C14.7363 3.93033 14.7363 2.73642 13.9999 2.00004C13.2635 1.26366 12.0696 1.26366 11.3333 2.00004L3.33325 10C1.66659 11.6667 1.33325 14.6667 1.33325 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDropper)
const Dropper = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Dropper', props.className].join(' ')}
    />
  )
})
Dropper.displayName = 'IconDropper'
export default Dropper
