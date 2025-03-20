import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartUp05 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 10-3.434 3.434c-.198.198-.297.297-.412.334a.5.5 0 0 1-.309 0c-.114-.037-.213-.136-.41-.334l-2.87-2.868c-.197-.198-.296-.297-.41-.334a.5.5 0 0 0-.31 0c-.114.037-.213.136-.41.334L6 14m16-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
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
      className={[props.className, 'tiui-icon', 'LineChartUp05'].join(' ')}
    />
  )
})
LineChartUp05.displayName = 'IconLineChartUp05'
export default LineChartUp05
