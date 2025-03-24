import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVideoRecorderOff = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.3527 19 16.4962 18.1048 16.8705 16.8745M17 12L20.6343 8.36569C21.0627 7.93731 21.2769 7.72312 21.4608 7.70865C21.6203 7.69609 21.7763 7.76068 21.8802 7.88238C22 8.02265 22 8.32556 22 8.93137V15.0686C22 15.6744 22 15.9774 21.8802 16.1176C21.7763 16.2393 21.6203 16.3039 21.4608 16.2914C21.2769 16.2769 21.0627 16.0627 20.6343 15.6343L17 12ZM17 12V9.8C17 8.11984 17 7.27976 16.673 6.63803C16.3854 6.07354 15.9265 5.6146 15.362 5.32698C14.7202 5 13.8802 5 12.2 5H9.5M2 2L22 22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVideoRecorderOff)
const VideoRecorderOff = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'VideoRecorderOff', props.className].join(' ')}
    />
  )
})
VideoRecorderOff.displayName = 'IconVideoRecorderOff'
export default VideoRecorderOff
