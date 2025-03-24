import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconConnect = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M15.6455 8.8811L9.2562 15.7365M21.4817 5.25332C22.0483 7.13622 20.9813 9.12196 19.0984 9.6886C17.2155 10.2552 15.2298 9.18821 14.6631 7.30531C14.0965 5.42242 15.1635 3.43667 17.0464 2.87003C18.9293 2.30339 20.9151 3.37043 21.4817 5.25332ZM10.2385 17.3123C10.8052 19.1952 9.73815 21.1809 7.85526 21.7476C5.97236 22.3142 3.98662 21.2472 3.41998 19.3643C2.85334 17.4814 3.92037 15.4956 5.80327 14.929C7.68617 14.3624 9.67191 15.4294 10.2385 17.3123Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconConnect)
const Connect = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Connect', props.className].join(' ')}
    />
  )
})
Connect.displayName = 'IconConnect'
export default Connect
