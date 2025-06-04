import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartUp05 = (props, ref) => {
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
        d="M11.9999 6.66665L9.71038 8.95619C9.57837 9.0882 9.51237 9.1542 9.43626 9.17893C9.36931 9.20068 9.29719 9.20068 9.23025 9.17893C9.15414 9.1542 9.08813 9.0882 8.95613 8.95619L7.04371 7.04377C6.9117 6.91176 6.8457 6.84576 6.76959 6.82103C6.70264 6.79928 6.63053 6.79928 6.56358 6.82103C6.48747 6.84576 6.42147 6.91176 6.28946 7.04377L3.99992 9.33331M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartUp05)
const LineChartUp05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartUp05', props.className].join(' ')}
    />
  )
})
LineChartUp05.displayName = 'IconLineChartUp05'
export default LineChartUp05
