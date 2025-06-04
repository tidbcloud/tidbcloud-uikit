import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDownloadCloud01 = (props, ref) => {
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
        d="M2.66668 10.8282C1.86269 10.29 1.33334 9.37347 1.33334 8.33333C1.33334 6.77095 2.52768 5.48753 4.05317 5.34625C4.36522 3.44809 6.01351 2 8.00001 2C9.98651 2 11.6348 3.44809 11.9468 5.34625C13.4723 5.48753 14.6667 6.77095 14.6667 8.33333C14.6667 9.37347 14.1373 10.29 13.3333 10.8282M5.33334 11.3333L8.00001 14M8.00001 14L10.6667 11.3333M8.00001 14V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDownloadCloud01)
const DownloadCloud01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DownloadCloud01', props.className].join(' ')}
    />
  )
})
DownloadCloud01.displayName = 'IconDownloadCloud01'
export default DownloadCloud01
