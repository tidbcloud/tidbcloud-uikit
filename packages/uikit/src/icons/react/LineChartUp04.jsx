import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartUp04 = (props, ref) => {
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
        d="M14 6L9.70098 9.07073C9.57036 9.16403 9.50506 9.21067 9.43512 9.22475C9.37346 9.23715 9.30956 9.23186 9.25079 9.20949C9.18411 9.18411 9.12736 9.12736 9.01386 9.01386L6.98614 6.98614C6.87264 6.87264 6.81589 6.81589 6.74921 6.79051C6.69044 6.76814 6.62654 6.76285 6.56488 6.77525C6.49494 6.78933 6.42964 6.83598 6.29902 6.92927L2 10M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartUp04)
const LineChartUp04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartUp04', props.className].join(' ')}
    />
  )
})
LineChartUp04.displayName = 'IconLineChartUp04'
export default LineChartUp04
