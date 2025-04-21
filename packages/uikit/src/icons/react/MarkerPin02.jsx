import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin02 = (props, ref) => {
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
        d="M8.00002 8.3335C9.10459 8.3335 10 7.43807 10 6.3335C10 5.22893 9.10459 4.3335 8.00002 4.3335C6.89545 4.3335 6.00002 5.22893 6.00002 6.3335C6.00002 7.43807 6.89545 8.3335 8.00002 8.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.00002 14.6668C9.33335 12.0002 13.3334 10.279 13.3334 6.66683C13.3334 3.72131 10.9455 1.3335 8.00002 1.3335C5.0545 1.3335 2.66669 3.72131 2.66669 6.66683C2.66669 10.279 6.66669 12.0002 8.00002 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin02)
const MarkerPin02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin02', props.className].join(' ')}
    />
  )
})
MarkerPin02.displayName = 'IconMarkerPin02'
export default MarkerPin02
