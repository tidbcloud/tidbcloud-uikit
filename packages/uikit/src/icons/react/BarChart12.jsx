import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChart12 = (props, ref) => {
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
        d="M6 8H3.06667C2.6933 8 2.50661 8 2.36401 8.07266C2.23856 8.13658 2.13658 8.23857 2.07266 8.36401C2 8.50661 2 8.6933 2 9.06667V12.9333C2 13.3067 2 13.4934 2.07266 13.636C2.13658 13.7614 2.23856 13.8634 2.36401 13.9273C2.50661 14 2.6933 14 3.06667 14H6M6 14H10M6 14L6 5.73333C6 5.35997 6 5.17328 6.07266 5.03067C6.13658 4.90523 6.23857 4.80324 6.36401 4.73933C6.50661 4.66667 6.6933 4.66667 7.06667 4.66667H8.93333C9.3067 4.66667 9.49339 4.66667 9.63599 4.73933C9.76143 4.80324 9.86342 4.90523 9.92734 5.03067C10 5.17328 10 5.35997 10 5.73333V14M10 14H12.9333C13.3067 14 13.4934 14 13.636 13.9273C13.7614 13.8634 13.8634 13.7614 13.9273 13.636C14 13.4934 14 13.3067 14 12.9333V3.06667C14 2.6933 14 2.50661 13.9273 2.36401C13.8634 2.23856 13.7614 2.13658 13.636 2.07266C13.4934 2 13.3067 2 12.9333 2H11.0667C10.6933 2 10.5066 2 10.364 2.07266C10.2386 2.13658 10.1366 2.23857 10.0727 2.36401C10 2.50661 10 2.6933 10 3.06667V5.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChart12)
const BarChart12 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChart12', props.className].join(' ')}
    />
  )
})
BarChart12.displayName = 'IconBarChart12'
export default BarChart12
