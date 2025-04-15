import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChartSquareMinus = (props, ref) => {
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
        d="M8.00016 2H10.8002C11.9203 2 12.4803 2 12.9081 2.21799C13.2845 2.40973 13.5904 2.71569 13.7822 3.09202C14.0002 3.51984 14.0002 4.0799 14.0002 5.2V10.8C14.0002 11.9201 14.0002 12.4802 13.7822 12.908C13.5904 13.2843 13.2845 13.5903 12.9081 13.782C12.4803 14 11.9203 14 10.8002 14H5.20016C4.08006 14 3.52001 14 3.09218 13.782C2.71586 13.5903 2.4099 13.2843 2.21815 12.908C2.00016 12.4802 2.00016 11.9201 2.00016 10.8V8M5.3335 8.66667V11.3333M10.6668 7.33333V11.3333M8.00016 4.66667V11.3333M1.3335 3.33333H5.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChartSquareMinus)
const BarChartSquareMinus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChartSquareMinus', props.className].join(' ')}
    />
  )
})
BarChartSquareMinus.displayName = 'IconBarChartSquareMinus'
export default BarChartSquareMinus
