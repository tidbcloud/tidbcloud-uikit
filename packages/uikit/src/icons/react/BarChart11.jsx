import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChart11 = (props, ref) => {
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
        d="M6 14H3.06667C2.6933 14 2.50661 14 2.36401 13.9273C2.23856 13.8634 2.13658 13.7614 2.07266 13.636C2 13.4934 2 13.3067 2 12.9333V3.06667C2 2.6933 2 2.50661 2.07266 2.36401C2.13658 2.23857 2.23856 2.13658 2.36401 2.07266C2.50661 2 2.6933 2 3.06667 2H4.93333C5.3067 2 5.49339 2 5.63599 2.07266C5.76144 2.13658 5.86342 2.23856 5.92734 2.36401C6 2.50661 6 2.6933 6 3.06667V4.66667M6 14H10M6 14L6 4.66667M6 4.66667H8.93333C9.3067 4.66667 9.49339 4.66667 9.63599 4.73933C9.76143 4.80324 9.86342 4.90523 9.92734 5.03067C10 5.17328 10 5.35997 10 5.73333V14M10 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V12.9333C14 13.3067 14 13.4934 13.9273 13.636C13.8634 13.7614 13.7614 13.8634 13.636 13.9273C13.4934 14 13.3067 14 12.9333 14H10"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChart11)
const BarChart11 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChart11', props.className].join(' ')}
    />
  )
})
BarChart11.displayName = 'IconBarChart11'
export default BarChart11
