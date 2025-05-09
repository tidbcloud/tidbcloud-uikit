import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVolumeMax = (props, ref) => {
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
        d="M19.748 5A11.95 11.95 0 0 1 22 12c0 2.612-.835 5.03-2.252 7M15.745 8A6.97 6.97 0 0 1 17 12a6.97 6.97 0 0 1-1.255 4M9.635 5.366 6.468 8.53c-.173.173-.26.26-.36.322a1 1 0 0 1-.29.12C5.704 9 5.582 9 5.337 9H3.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 9.76 2 10.04 2 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 15 3.04 15 3.6 15h1.737c.245 0 .367 0 .482.028a1 1 0 0 1 .29.12c.1.061.187.148.36.32l3.165 3.166c.429.429.643.643.827.657a.5.5 0 0 0 .42-.174c.119-.14.119-.443.119-1.048V5.93c0-.606 0-.908-.12-1.049a.5.5 0 0 0-.42-.173c-.183.014-.397.228-.826.657"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVolumeMax)
const VolumeMax = forwardRef((props, ref) => {
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
VolumeMax.displayName = 'IconVolumeMax'
export default VolumeMax
