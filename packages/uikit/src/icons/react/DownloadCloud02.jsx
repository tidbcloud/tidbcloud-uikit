import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDownloadCloud02 = (props, ref) => {
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
        d="m8 17 4 4m0 0 4-4m-4 4v-9m8 4.743A5.5 5.5 0 0 0 16.5 7a.62.62 0 0 1-.534-.302 7.5 7.5 0 1 0-11.78 9.096"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDownloadCloud02)
const DownloadCloud02 = forwardRef((props, ref) => {
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
DownloadCloud02.displayName = 'IconDownloadCloud02'
export default DownloadCloud02
