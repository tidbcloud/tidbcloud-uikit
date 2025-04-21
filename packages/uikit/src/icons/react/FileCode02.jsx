import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileCode02 = (props, ref) => {
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
        d="M3.33332 12.3335C3.33332 12.6431 3.33332 12.7979 3.35043 12.9279C3.46859 13.8253 4.1748 14.5316 5.07227 14.6497C5.20224 14.6668 5.35704 14.6668 5.66666 14.6668H10.8C11.9201 14.6668 12.4801 14.6668 12.908 14.4488C13.2843 14.2571 13.5903 13.9511 13.782 13.5748C14 13.147 14 12.5869 14 11.4668V6.65898C14 6.1698 14 5.92521 13.9447 5.69503C13.8957 5.49096 13.8149 5.29587 13.7053 5.11693C13.5816 4.91509 13.4086 4.74214 13.0627 4.39624L10.9372 2.27075C10.5913 1.92485 10.4184 1.7519 10.2166 1.62822C10.0376 1.51856 9.84253 1.43775 9.63845 1.38876C9.40828 1.3335 9.16369 1.3335 8.67451 1.3335H5.66666C5.35704 1.3335 5.20224 1.3335 5.07227 1.35061C4.1748 1.46876 3.46859 2.17498 3.35043 3.07244C3.33332 3.20241 3.33332 3.35722 3.33332 3.66683M5.99999 9.66683L7.66666 8.00016L5.99999 6.3335M3.33332 6.3335L1.66666 8.00016L3.33332 9.66683"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileCode02)
const FileCode02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileCode02', props.className].join(' ')}
    />
  )
})
FileCode02.displayName = 'IconFileCode02'
export default FileCode02
