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
      ref={ref}
      {...props}
    >
      <path
        d="M2.66683 10.8282C1.86284 10.29 1.3335 9.37347 1.3335 8.33333C1.3335 6.77095 2.52783 5.48753 4.05332 5.34625C4.36537 3.44809 6.01366 2 8.00016 2C9.98667 2 11.635 3.44809 11.947 5.34625C13.4725 5.48753 14.6668 6.77095 14.6668 8.33333C14.6668 9.37347 14.1375 10.29 13.3335 10.8282M5.3335 11.3333L8.00016 14M8.00016 14L10.6668 11.3333M8.00016 14V8"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
