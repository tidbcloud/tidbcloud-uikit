import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStar05 = (props, ref) => {
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
        d="M8.00016 1.33325L7.1325 4.80391C6.96319 5.48115 6.87853 5.81977 6.70222 6.09531C6.54626 6.33904 6.33928 6.54602 6.09556 6.70198C5.82001 6.87829 5.4814 6.96294 4.80416 7.13225L1.3335 7.99992L4.80416 8.86758C5.48139 9.03689 5.82001 9.12155 6.09556 9.29786C6.33928 9.45382 6.54626 9.6608 6.70222 9.90453C6.87853 10.1801 6.96319 10.5187 7.1325 11.1959L8.00016 14.6666L8.86783 11.1959C9.03714 10.5187 9.12179 10.1801 9.29811 9.90453C9.45406 9.6608 9.66105 9.45382 9.90477 9.29786C10.1803 9.12155 10.5189 9.03689 11.1962 8.86758L14.6668 7.99992L11.1962 7.13225C10.5189 6.96294 10.1803 6.87829 9.90477 6.70198C9.66105 6.54602 9.45406 6.33904 9.29811 6.09531C9.12179 5.81977 9.03714 5.48115 8.86783 4.80391L8.00016 1.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStar05)
const Star05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Star05', props.className].join(' ')}
    />
  )
})
Star05.displayName = 'IconStar05'
export default Star05
