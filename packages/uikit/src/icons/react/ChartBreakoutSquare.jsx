import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChartBreakoutSquare = (props, ref) => {
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
        d="M7.33333 1.99998H5.2C4.0799 1.99998 3.51984 1.99998 3.09202 2.21797C2.71569 2.40971 2.40973 2.71567 2.21799 3.092C2 3.51982 2 4.07987 2 5.19998V10.8C2 11.9201 2 12.4801 2.21799 12.908C2.40973 13.2843 2.71569 13.5902 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5902 13.5903 13.2843 13.782 12.908C14 12.4801 14 11.9201 14 10.8V8.66665M8 5.33331H10.6667V7.99998M10.3333 2.33331V1.33331M12.9596 3.04042L13.6667 2.33331M13.6735 5.66665H14.6735M2 8.89805C2.43463 8.96516 2.87991 8.99998 3.33333 8.99998C6.25757 8.99998 8.84355 7.55171 10.4131 5.33331"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChartBreakoutSquare)
const ChartBreakoutSquare = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChartBreakoutSquare', props.className].join(' ')}
    />
  )
})
ChartBreakoutSquare.displayName = 'IconChartBreakoutSquare'
export default ChartBreakoutSquare
