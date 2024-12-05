import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMediaMicrosoft = (props, ref) => {
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
      <path fill="#F3F3F3" d="M22 2H2v20h20z" strokeWidth="inherit" stroke="currentColor" />
      <path fill="#F8682C" d="M11.613 2.774H2.774v8.839h8.839z" strokeWidth="inherit" stroke="currentColor" />
      <path fill="#91C300" d="M21.226 2.774h-8.838v8.839h8.838z" strokeWidth="inherit" stroke="currentColor" />
      <path fill="#00B4F1" d="M11.613 12.387H2.774v8.839h8.839z" strokeWidth="inherit" stroke="currentColor" />
      <path fill="#FFC300" d="M21.226 12.387h-8.838v8.839h8.838z" strokeWidth="inherit" stroke="currentColor" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMediaMicrosoft)
const MediaMicrosoft = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
MediaMicrosoft.displayName = 'IconMediaMicrosoft'
export default MediaMicrosoft
