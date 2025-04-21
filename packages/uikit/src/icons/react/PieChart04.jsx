import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart04 = (props, ref) => {
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
        d="M7.99993 8.00001L1.55444 6.29704C1.13975 7.86658 1.31201 9.5335 2.0389 10.9851C2.76579 12.4366 3.99736 13.5731 5.50255 14.1812L7.99993 8.00001ZM7.99993 8.00001L8.06974 1.33371C6.5903 1.31822 5.14774 1.7953 3.96927 2.68981C2.79079 3.58433 1.94335 4.84545 1.56042 6.27455L7.99993 8.00001ZM14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99993 14.6667C4.31803 14.6667 1.33326 11.6819 1.33326 8.00001C1.33326 4.31811 4.31803 1.33334 7.99993 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart04)
const PieChart04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PieChart04', props.className].join(' ')}
    />
  )
})
PieChart04.displayName = 'IconPieChart04'
export default PieChart04
