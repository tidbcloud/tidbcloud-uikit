import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChartBreakoutCircle = (props, ref) => {
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
        d="M10.3335 2.33337V1.33337M12.9597 3.04048L13.6668 2.33337M13.6737 5.66671H14.6737M14.6339 8.66671C14.2994 12.0356 11.4571 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.54314 3.96461 1.70077 7.3335 1.36629M8.00016 5.33337H10.6668V8.00004M10.4133 5.33337C8.84372 7.55177 6.25774 9.00004 3.3335 9.00004C2.66489 9.00004 2.01397 8.92433 1.38884 8.78101"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChartBreakoutCircle)
const ChartBreakoutCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChartBreakoutCircle', props.className].join(' ')}
    />
  )
})
ChartBreakoutCircle.displayName = 'IconChartBreakoutCircle'
export default ChartBreakoutCircle
