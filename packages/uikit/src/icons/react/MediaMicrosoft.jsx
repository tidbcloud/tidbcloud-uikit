import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMediaMicrosoft = (props, ref) => {
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
      <path d="M14.6663 1.33325H1.33301V14.6666H14.6663V1.33325Z" fill="#F3F3F3" />
      <path d="M7.74179 1.84961H1.84961V7.74179H7.74179V1.84961Z" fill="#F8682C" />
      <path d="M14.151 1.84961H8.25879V7.74179H14.151V1.84961Z" fill="#91C300" />
      <path d="M7.74179 8.25806H1.84961V14.1502H7.74179V8.25806Z" fill="#00B4F1" />
      <path d="M14.151 8.25806H8.25879V14.1502H14.151V8.25806Z" fill="#FFC300" />
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
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'MediaMicrosoft', props.className].join(' ')}
    />
  )
})
MediaMicrosoft.displayName = 'IconMediaMicrosoft'
export default MediaMicrosoft
