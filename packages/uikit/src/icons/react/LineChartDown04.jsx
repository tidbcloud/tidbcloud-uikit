import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartDown04 = (props, ref) => {
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
        d="m3 9 6.655 4.754a.5.5 0 0 0 .645-.053l3.4-3.402a.5.5 0 0 1 .645-.053L21 15M6 21h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartDown04)
const LineChartDown04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LineChartDown04'].join(' ')}
    />
  )
})
LineChartDown04.displayName = 'IconLineChartDown04'
export default LineChartDown04
