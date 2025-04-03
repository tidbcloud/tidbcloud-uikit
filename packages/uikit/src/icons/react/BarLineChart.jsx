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
      ref={ref}
      {...props}
    >
      <path
        d="M13.3332 13.3333V8.66667M7.99984 13.3333V6.66667M2.6665 13.3333L2.6665 10.6667M8.93762 3.35167L12.3832 4.64378M7.19902 3.60061L3.46666 6.39989M14.0403 4.29289C14.4308 4.68342 14.4308 5.31658 14.0403 5.70711C13.6498 6.09763 13.0166 6.09763 12.6261 5.70711C12.2355 5.31658 12.2355 4.68342 12.6261 4.29289C13.0166 3.90237 13.6498 3.90237 14.0403 4.29289ZM3.37361 6.29289C3.76413 6.68342 3.76413 7.31658 3.37361 7.70711C2.98309 8.09763 2.34992 8.09763 1.9594 7.70711C1.56887 7.31658 1.56887 6.68342 1.9594 6.29289C2.34992 5.90237 2.98309 5.90237 3.37361 6.29289ZM8.70694 2.29289C9.09747 2.68342 9.09747 3.31658 8.70694 3.70711C8.31642 4.09763 7.68325 4.09763 7.29273 3.70711C6.90221 3.31658 6.90221 2.68342 7.29273 2.29289C7.68325 1.90237 8.31642 1.90237 8.70694 2.29289Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
