import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart03 = (props, ref) => {
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
        d="M7.99992 1.33334C8.8754 1.33334 9.74231 1.50578 10.5511 1.84081C11.36 2.17585 12.0949 2.66691 12.714 3.28597C13.333 3.90502 13.8241 4.63995 14.1591 5.44879C14.4941 6.25763 14.6666 7.12454 14.6666 8.00001M7.99992 1.33334V8.00001M7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001M7.99992 1.33334C11.6818 1.33334 14.6666 4.31812 14.6666 8.00001M14.6666 8.00001L7.99992 8.00001M14.6666 8.00001C14.6666 9.05208 14.4176 10.0892 13.94 11.0266C13.4623 11.964 12.7696 12.7751 11.9185 13.3935L7.99992 8.00001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart03)
const PieChart03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PieChart03', props.className].join(' ')}
    />
  )
})
PieChart03.displayName = 'IconPieChart03'
export default PieChart03
