import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChartSquareDown = (props, ref) => {
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
        d="M8.00016 1.99998H10.8002C11.9203 1.99998 12.4803 1.99998 12.9081 2.21797C13.2845 2.40971 13.5904 2.71567 13.7822 3.092C14.0002 3.51982 14.0002 4.07987 14.0002 5.19998V10.8C14.0002 11.9201 14.0002 12.4801 13.7822 12.908C13.5904 13.2843 13.2845 13.5902 12.9081 13.782C12.4803 14 11.9203 14 10.8002 14H5.20016C4.08006 14 3.52001 14 3.09218 13.782C2.71586 13.5902 2.4099 13.2843 2.21815 12.908C2.00016 12.4801 2.00016 11.9201 2.00016 10.8V7.99998M5.3335 8.66665V11.3333M10.6668 7.33331V11.3333M8.00016 4.66665V11.3333M1.3335 3.33331L3.3335 5.33331M3.3335 5.33331L5.3335 3.33331M3.3335 5.33331L3.3335 1.33331"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChartSquareDown)
const BarChartSquareDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChartSquareDown', props.className].join(' ')}
    />
  )
})
BarChartSquareDown.displayName = 'IconBarChartSquareDown'
export default BarChartSquareDown
