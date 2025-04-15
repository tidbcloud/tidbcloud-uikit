import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartDown03 = (props, ref) => {
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
        d="M11.3333 10L7.71046 6.37712C7.57845 6.24512 7.51245 6.17912 7.43634 6.15439C7.36939 6.13263 7.29728 6.13263 7.23033 6.15439C7.15422 6.17912 7.08822 6.24512 6.95621 6.37712L5.71046 7.62288C5.57845 7.75488 5.51245 7.82088 5.43634 7.84561C5.36939 7.86737 5.29728 7.86737 5.23033 7.84561C5.15422 7.82088 5.08822 7.75488 4.95621 7.62288L2 4.66667M11.3333 10H8.66667M11.3333 10V7.33333M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartDown03)
const LineChartDown03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartDown03', props.className].join(' ')}
    />
  )
})
LineChartDown03.displayName = 'IconLineChartDown03'
export default LineChartDown03
