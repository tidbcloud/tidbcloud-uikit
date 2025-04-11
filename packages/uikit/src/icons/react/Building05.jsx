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
      ref={ref}
      {...props}
    >
      <path
        d="M8.66683 7.33333H11.8668C12.6136 7.33333 12.9869 7.33333 13.2722 7.47866C13.523 7.60649 13.727 7.81046 13.8548 8.06135C14.0002 8.34656 14.0002 8.71993 14.0002 9.46667V14M8.66683 14V4.13333C8.66683 3.3866 8.66683 3.01323 8.5215 2.72801C8.39367 2.47713 8.1897 2.27316 7.93882 2.14532C7.6536 2 7.28023 2 6.5335 2H4.1335C3.38676 2 3.01339 2 2.72818 2.14532C2.47729 2.27316 2.27332 2.47713 2.14549 2.72801C2.00016 3.01323 2.00016 3.3866 2.00016 4.13333V14M14.6668 14H1.3335M4.3335 4.66667H6.3335M4.3335 7.33333H6.3335M4.3335 10H6.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
