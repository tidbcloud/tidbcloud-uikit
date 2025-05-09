import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarLineChart = (props, ref) => {
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
        d="M13.3334 13.3333V8.66667M8.00008 13.3333V6.66667M2.66675 13.3333L2.66675 10.6667M8.93787 3.35167L12.3835 4.64378M7.19926 3.60061L3.4669 6.39989M14.0405 4.29289C14.431 4.68342 14.431 5.31658 14.0405 5.70711C13.65 6.09763 13.0168 6.09763 12.6263 5.70711C12.2358 5.31658 12.2358 4.68342 12.6263 4.29289C13.0168 3.90237 13.65 3.90237 14.0405 4.29289ZM3.37385 6.29289C3.76438 6.68342 3.76438 7.31658 3.37385 7.70711C2.98333 8.09763 2.35017 8.09763 1.95964 7.70711C1.56912 7.31658 1.56912 6.68342 1.95964 6.29289C2.35017 5.90237 2.98333 5.90237 3.37385 6.29289ZM8.70719 2.29289C9.09771 2.68342 9.09771 3.31658 8.70719 3.70711C8.31666 4.09763 7.6835 4.09763 7.29297 3.70711C6.90245 3.31658 6.90245 2.68342 7.29297 2.29289C7.6835 1.90237 8.31666 1.90237 8.70719 2.29289Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarLineChart)
const BarLineChart = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarLineChart', props.className].join(' ')}
    />
  )
})
BarLineChart.displayName = 'IconBarLineChart'
export default BarLineChart
