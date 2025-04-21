import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPlayCircle = (props, ref) => {
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
        d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M6.33325 5.97681C6.33325 5.65862 6.33325 5.49952 6.39975 5.4107C6.45769 5.3333 6.54639 5.28488 6.64284 5.27799C6.75351 5.27008 6.88733 5.35611 7.15499 5.52818L10.3021 7.55129C10.5343 7.7006 10.6504 7.77525 10.6905 7.87018C10.7256 7.95312 10.7256 8.04672 10.6905 8.12966C10.6504 8.22459 10.5343 8.29924 10.3021 8.44855L7.15499 10.4717C6.88734 10.6437 6.75351 10.7298 6.64284 10.7219C6.54639 10.715 6.45769 10.6665 6.39975 10.5891C6.33325 10.5003 6.33325 10.3412 6.33325 10.023V5.97681Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPlayCircle)
const PlayCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PlayCircle', props.className].join(' ')}
    />
  )
})
PlayCircle.displayName = 'IconPlayCircle'
export default PlayCircle
