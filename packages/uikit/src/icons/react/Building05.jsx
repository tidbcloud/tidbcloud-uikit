import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding05 = (props, ref) => {
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
        d="M8.66667 7.33333H11.8667C12.6134 7.33333 12.9868 7.33333 13.272 7.47866C13.5229 7.60649 13.7268 7.81046 13.8547 8.06135C14 8.34656 14 8.71993 14 9.46667V14M8.66667 14V4.13333C8.66667 3.3866 8.66667 3.01323 8.52134 2.72801C8.39351 2.47713 8.18954 2.27316 7.93866 2.14532C7.65344 2 7.28007 2 6.53334 2H4.13334C3.3866 2 3.01323 2 2.72802 2.14532C2.47713 2.27316 2.27316 2.47713 2.14533 2.72801C2 3.01323 2 3.3866 2 4.13333V14M14.6667 14H1.33334M4.33334 4.66667H6.33334M4.33334 7.33333H6.33334M4.33334 10H6.33334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding05)
const Building05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building05', props.className].join(' ')}
    />
  )
})
Building05.displayName = 'IconBuilding05'
export default Building05
