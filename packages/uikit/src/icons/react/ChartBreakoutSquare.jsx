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
      ref={ref}
      {...props}
    >
      <path
        d="M7.33333 2.00004H5.2C4.0799 2.00004 3.51984 2.00004 3.09202 2.21803C2.71569 2.40977 2.40973 2.71574 2.21799 3.09206C2 3.51988 2 4.07994 2 5.20004V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.7821C3.51984 14 4.07989 14 5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.7821C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V8.66671M8 5.33337H10.6667V8.00004M10.3333 2.33337V1.33337M12.9596 3.04048L13.6667 2.33337M13.6735 5.66671H14.6735M2 8.89811C2.43463 8.96522 2.87991 9.00004 3.33333 9.00004C6.25757 9.00004 8.84355 7.55177 10.4131 5.33337"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
