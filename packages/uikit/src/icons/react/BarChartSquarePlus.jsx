import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChartSquarePlus = (props, ref) => {
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
        d="M8.00016 2.00004H10.8002C11.9203 2.00004 12.4803 2.00004 12.9081 2.21803C13.2845 2.40977 13.5904 2.71574 13.7822 3.09206C14.0002 3.51988 14.0002 4.07994 14.0002 5.20004V10.8C14.0002 11.9201 14.0002 12.4802 13.7822 12.908C13.5904 13.2843 13.2845 13.5903 12.9081 13.7821C12.4803 14 11.9203 14 10.8002 14H5.20016C4.08006 14 3.52001 14 3.09218 13.7821C2.71586 13.5903 2.4099 13.2843 2.21815 12.908C2.00016 12.4802 2.00016 11.9201 2.00016 10.8V8.00004M5.3335 8.66671V11.3334M10.6668 7.33337V11.3334M8.00016 4.66671V11.3334M3.3335 5.33337V1.33337M1.3335 3.33337H5.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChartSquarePlus)
const BarChartSquarePlus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChartSquarePlus', props.className].join(' ')}
    />
  )
})
BarChartSquarePlus.displayName = 'IconBarChartSquarePlus'
export default BarChartSquarePlus
