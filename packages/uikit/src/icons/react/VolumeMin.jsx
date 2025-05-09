import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVolumeMin = (props, ref) => {
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
        d="M18.245 8a6.97 6.97 0 0 1 1.255 4 6.97 6.97 0 0 1-1.255 4m-6.11-11.634L8.968 7.53c-.173.173-.26.26-.36.322a1 1 0 0 1-.29.12C8.204 8 8.082 8 7.837 8H6.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4.5 8.76 4.5 9.04 4.5 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.26 16 5.54 16 6.1 16h1.737c.245 0 .367 0 .482.028a1 1 0 0 1 .29.12c.1.061.187.148.36.32l3.165 3.166c.429.429.643.643.827.657a.5.5 0 0 0 .42-.174c.119-.14.119-.443.119-1.048V4.93c0-.606 0-.908-.12-1.049a.5.5 0 0 0-.42-.173c-.183.014-.397.228-.826.657"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVolumeMin)
const VolumeMin = forwardRef((props, ref) => {
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
VolumeMin.displayName = 'IconVolumeMin'
export default VolumeMin
