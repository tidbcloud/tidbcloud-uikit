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
      ref={ref}
      {...props}
    >
      <path
        d="M12.0002 6.66671L9.71062 8.95625C9.57861 9.08826 9.51261 9.15426 9.4365 9.17899C9.36955 9.20074 9.29744 9.20074 9.23049 9.17899C9.15438 9.15426 9.08838 9.08826 8.95637 8.95625L7.04395 7.04383C6.91195 6.91183 6.84594 6.84582 6.76984 6.82109C6.70289 6.79934 6.63077 6.79934 6.56382 6.82109C6.48771 6.84582 6.42171 6.91183 6.28971 7.04383L4.00016 9.33337M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
