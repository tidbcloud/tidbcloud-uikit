import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartDown05 = (props, ref) => {
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
        d="M4.00016 6.66665L6.28971 8.95619C6.42171 9.0882 6.48771 9.1542 6.56382 9.17893C6.63077 9.20068 6.70289 9.20068 6.76984 9.17893C6.84594 9.1542 6.91195 9.0882 7.04395 8.95619L8.95637 7.04377C9.08838 6.91176 9.15438 6.84576 9.23049 6.82103C9.29744 6.79928 9.36955 6.79928 9.4365 6.82103C9.51261 6.84576 9.57861 6.91176 9.71062 7.04377L12.0002 9.33331M14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 4.31808 4.31826 1.33331 8.00016 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 7.99998Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartDown05)
const LineChartDown05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartDown05', props.className].join(' ')}
    />
  )
})
LineChartDown05.displayName = 'IconLineChartDown05'
export default LineChartDown05
