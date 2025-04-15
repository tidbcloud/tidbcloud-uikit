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
      ref={ref}
      {...props}
    >
      <path
        d="M5.3335 11.3333L8.00016 14M8.00016 14L10.6668 11.3333M8.00016 14V8M13.3335 11.1619C14.1478 10.4894 14.6668 9.47196 14.6668 8.33333C14.6668 6.30829 13.0252 4.66667 11.0002 4.66667C10.8545 4.66667 10.7182 4.59066 10.6442 4.46516C9.77487 2.98989 8.16978 2 6.3335 2C3.57207 2 1.3335 4.23858 1.3335 7C1.3335 8.3774 1.89046 9.62472 2.79146 10.529"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
