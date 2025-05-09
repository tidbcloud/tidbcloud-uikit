import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartUp02 = (props, ref) => {
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
        d="M14 14H3.06667C2.6933 14 2.50661 14 2.36401 13.9273C2.23856 13.8634 2.13658 13.7614 2.07266 13.636C2 13.4934 2 13.3067 2 12.9333V2M14 4.66667L10.3771 8.28954C10.2451 8.42155 10.1791 8.48755 10.103 8.51228C10.0361 8.53403 9.96394 8.53403 9.89699 8.51228C9.82089 8.48755 9.75488 8.42155 9.62288 8.28954L8.37712 7.04379C8.24512 6.91178 8.17912 6.84578 8.10301 6.82105C8.03606 6.7993 7.96394 6.7993 7.89699 6.82105C7.82088 6.84578 7.75488 6.91178 7.62288 7.04379L4.66667 10M14 4.66667H11.3333M14 4.66667V7.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartUp02)
const LineChartUp02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartUp02', props.className].join(' ')}
    />
  )
})
LineChartUp02.displayName = 'IconLineChartUp02'
export default LineChartUp02
