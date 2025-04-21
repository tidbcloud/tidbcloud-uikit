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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.99992 6.66665L6.28946 8.95619C6.42147 9.0882 6.48747 9.1542 6.56358 9.17893C6.63053 9.20068 6.70264 9.20068 6.76959 9.17893C6.8457 9.1542 6.9117 9.0882 7.04371 8.95619L8.95613 7.04377C9.08813 6.91176 9.15414 6.84576 9.23025 6.82103C9.29719 6.79928 9.36931 6.79928 9.43626 6.82103C9.51237 6.84576 9.57837 6.91176 9.71038 7.04377L11.9999 9.33331M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
