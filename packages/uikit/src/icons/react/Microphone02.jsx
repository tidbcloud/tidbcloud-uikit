import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMicrophone02 = (props, ref) => {
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
        d="M13.3334 8V8.66667C13.3334 11.6122 10.9456 14 8.00008 14C5.05456 14 2.66675 11.6122 2.66675 8.66667V8M8.00008 11.3333C6.52732 11.3333 5.33341 10.1394 5.33341 8.66667V4.66667C5.33341 3.19391 6.52732 2 8.00008 2C9.47284 2 10.6667 3.19391 10.6667 4.66667V8.66667C10.6667 10.1394 9.47284 11.3333 8.00008 11.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMicrophone02)
const Microphone02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Microphone02', props.className].join(' ')}
    />
  )
})
Microphone02.displayName = 'IconMicrophone02'
export default Microphone02
