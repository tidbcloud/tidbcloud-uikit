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
      ref={ref}
      {...props}
    >
      <path
        d="M13.3332 8V8.66667C13.3332 11.6122 10.9454 14 7.99984 14C5.05432 14 2.6665 11.6122 2.6665 8.66667V8M7.99984 11.3333C6.52708 11.3333 5.33317 10.1394 5.33317 8.66667V4.66667C5.33317 3.19391 6.52708 2 7.99984 2C9.4726 2 10.6665 3.19391 10.6665 4.66667V8.66667C10.6665 10.1394 9.4726 11.3333 7.99984 11.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
