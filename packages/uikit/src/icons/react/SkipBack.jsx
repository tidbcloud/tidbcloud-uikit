import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSkipBack = (props, ref) => {
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
        d="M3.3335 12.6666V3.33325M10.9338 4.05299L7.04132 7.16699C6.68542 7.45171 6.50748 7.59407 6.44305 7.76605C6.38656 7.91685 6.38656 8.08299 6.44305 8.23378C6.50748 8.40577 6.68542 8.54813 7.04132 8.83285L10.9338 11.9468C11.4886 12.3907 11.766 12.6126 11.9994 12.6128C12.2025 12.6131 12.3945 12.5207 12.5212 12.3621C12.6668 12.1796 12.6668 11.8244 12.6668 11.1139V4.88592C12.6668 4.17545 12.6668 3.82022 12.5212 3.63777C12.3945 3.47909 12.2025 3.38678 11.9994 3.387C11.766 3.38725 11.4886 3.60917 10.9338 4.05299Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSkipBack)
const SkipBack = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SkipBack', props.className].join(' ')}
    />
  )
})
SkipBack.displayName = 'IconSkipBack'
export default SkipBack
