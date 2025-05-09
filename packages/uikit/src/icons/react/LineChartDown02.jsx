import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartDown02 = (props, ref) => {
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
        d="M14 14H3.06667C2.6933 14 2.50661 14 2.36401 13.9273C2.23856 13.8634 2.13658 13.7614 2.07266 13.636C2 13.4934 2 13.3067 2 12.9333V2M14 10L10.3771 6.37712C10.2451 6.24512 10.1791 6.17912 10.103 6.15439C10.0361 6.13263 9.96394 6.13263 9.89699 6.15439C9.82089 6.17912 9.75488 6.24512 9.62288 6.37712L8.37712 7.62288C8.24512 7.75488 8.17912 7.82088 8.10301 7.84561C8.03606 7.86737 7.96394 7.86737 7.89699 7.84561C7.82088 7.82088 7.75488 7.75488 7.62288 7.62288L4.66667 4.66667M14 10H11.3333M14 10V7.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartDown02)
const LineChartDown02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartDown02', props.className].join(' ')}
    />
  )
})
LineChartDown02.displayName = 'IconLineChartDown02'
export default LineChartDown02
