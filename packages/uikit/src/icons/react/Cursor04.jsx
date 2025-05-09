import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursor04 = (props, ref) => {
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
        d="M2.93793 2.27602C2.63243 2.18617 2.47967 2.14124 2.37567 2.18001C2.28504 2.2138 2.21355 2.28528 2.17977 2.37592C2.141 2.47992 2.18592 2.63267 2.27578 2.93817L5.07971 12.4715C5.16321 12.7554 5.20496 12.8974 5.28922 12.9633C5.36274 13.0208 5.45701 13.0448 5.5491 13.0295C5.65463 13.012 5.75925 12.9074 5.96849 12.6982L7.99988 10.6668L10.9561 13.623C11.0881 13.755 11.1541 13.821 11.2302 13.8457C11.2972 13.8675 11.3693 13.8675 11.4362 13.8457C11.5123 13.821 11.5783 13.755 11.7103 13.623L13.6228 11.7106C13.7548 11.5786 13.8208 11.5126 13.8455 11.4365C13.8672 11.3695 13.8672 11.2974 13.8455 11.2305C13.8208 11.1543 13.7548 11.0883 13.6228 10.9563L10.6665 8.00012L12.6979 5.96874C12.9072 5.75949 13.0118 5.65487 13.0293 5.54934C13.0446 5.45726 13.0205 5.36299 12.963 5.28946C12.8971 5.2052 12.7552 5.16345 12.4713 5.07995L2.93793 2.27602Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursor04)
const Cursor04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cursor04', props.className].join(' ')}
    />
  )
})
Cursor04.displayName = 'IconCursor04'
export default Cursor04
