import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMicrophoneOff02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12v1a8 8 0 0 0 14.138 5.132M2 2l20 20m-6-11.6V7a4 4 0 0 0-6.53-3.1M12 17a4 4 0 0 1-4-4V8l7.281 7.288A4 4 0 0 1 12 17"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMicrophoneOff02)
const MicrophoneOff02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MicrophoneOff02'].join(' ')}
    />
  )
})
MicrophoneOff02.displayName = 'IconMicrophoneOff02'
export default MicrophoneOff02
