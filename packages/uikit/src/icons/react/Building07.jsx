import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding07 = (props, ref) => {
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
        d="M5.00016 7.33333H3.06683C2.69346 7.33333 2.50678 7.33333 2.36417 7.406C2.23873 7.46991 2.13674 7.5719 2.07283 7.69734C2.00016 7.83995 2.00016 8.02663 2.00016 8.4V14M11.0002 7.33333H12.9335C13.3069 7.33333 13.4935 7.33333 13.6362 7.406C13.7616 7.46991 13.8636 7.5719 13.9275 7.69734C14.0002 7.83995 14.0002 8.02663 14.0002 8.4V14M11.0002 14V4.13333C11.0002 3.3866 11.0002 3.01323 10.8548 2.72801C10.727 2.47713 10.523 2.27316 10.2722 2.14532C9.98693 2 9.61357 2 8.86683 2H7.1335C6.38676 2 6.01339 2 5.72818 2.14532C5.47729 2.27316 5.27332 2.47713 5.14549 2.72801C5.00016 3.01323 5.00016 3.3866 5.00016 4.13333V14M14.6668 14H1.3335M7.3335 4.66667H8.66683M7.3335 7.33333H8.66683M7.3335 10H8.66683"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding07)
const Building07 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building07', props.className].join(' ')}
    />
  )
})
Building07.displayName = 'IconBuilding07'
export default Building07
