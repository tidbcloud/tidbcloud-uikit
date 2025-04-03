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
      ref={ref}
      {...props}
    >
      <path
        d="M7.99984 8.3335C9.10441 8.3335 9.99984 7.43807 9.99984 6.3335C9.99984 5.22893 9.10441 4.3335 7.99984 4.3335C6.89527 4.3335 5.99984 5.22893 5.99984 6.3335C5.99984 7.43807 6.89527 8.3335 7.99984 8.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99984 14.6668C9.33317 12.0002 13.3332 10.279 13.3332 6.66683C13.3332 3.72131 10.9454 1.3335 7.99984 1.3335C5.05432 1.3335 2.6665 3.72131 2.6665 6.66683C2.6665 10.279 6.6665 12.0002 7.99984 14.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
