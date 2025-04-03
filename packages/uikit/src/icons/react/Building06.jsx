import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding06 = (props, ref) => {
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
        d="M7.3335 7.33333H4.1335C3.38676 7.33333 3.01339 7.33333 2.72818 7.47866C2.47729 7.60649 2.27332 7.81046 2.14549 8.06135C2.00016 8.34656 2.00016 8.71993 2.00016 9.46667V14M14.0002 14V4.13333C14.0002 3.3866 14.0002 3.01323 13.8548 2.72801C13.727 2.47713 13.523 2.27316 13.2722 2.14532C12.9869 2 12.6136 2 11.8668 2H9.46683C8.72009 2 8.34672 2 8.06151 2.14532C7.81063 2.27316 7.60665 2.47713 7.47882 2.72801C7.3335 3.01323 7.3335 3.3866 7.3335 4.13333V14M14.6668 14H1.3335M9.66683 4.66667H11.6668M9.66683 7.33333H11.6668M9.66683 10H11.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding06)
const Building06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building06', props.className].join(' ')}
    />
  )
})
Building06.displayName = 'IconBuilding06'
export default Building06
