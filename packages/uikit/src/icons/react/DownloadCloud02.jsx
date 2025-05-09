import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDownloadCloud02 = (props, ref) => {
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
        d="M5.33334 11.3333L8.00001 14M8.00001 14L10.6667 11.3333M8.00001 14V8M13.3333 11.1619C14.1477 10.4894 14.6667 9.47196 14.6667 8.33333C14.6667 6.30829 13.0251 4.66667 11 4.66667C10.8543 4.66667 10.718 4.59066 10.6441 4.46516C9.77472 2.98989 8.16963 2 6.33334 2C3.57192 2 1.33334 4.23858 1.33334 7C1.33334 8.3774 1.89031 9.62472 2.79131 10.529"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'DownloadCloud02', props.className].join(' ')}
    />
  )
})
DownloadCloud02.displayName = 'IconDownloadCloud02'
export default DownloadCloud02
