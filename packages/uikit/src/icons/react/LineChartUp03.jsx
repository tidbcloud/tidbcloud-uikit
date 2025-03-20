import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartUp03 = (props, ref) => {
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
        d="m17 9-5.434 5.434c-.198.198-.297.297-.412.334a.5.5 0 0 1-.309 0c-.114-.037-.213-.136-.41-.334l-1.87-1.868c-.197-.198-.296-.297-.41-.334a.5.5 0 0 0-.31 0c-.114.037-.213.136-.41.334L3 17m14-8h-4m4 0v4m-9.2 8h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartUp03)
const LineChartUp03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LineChartUp03'].join(' ')}
    />
  )
})
LineChartUp03.displayName = 'IconLineChartUp03'
export default LineChartUp03
