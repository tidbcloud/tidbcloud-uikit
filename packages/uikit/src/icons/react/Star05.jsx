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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M7.99992 1.33325L7.13225 4.80391C6.96294 5.48115 6.87829 5.81977 6.70198 6.09531C6.54602 6.33904 6.33904 6.54602 6.09531 6.70198C5.81977 6.87829 5.48115 6.96294 4.80391 7.13225L1.33325 7.99992L4.80391 8.86758C5.48115 9.03689 5.81977 9.12155 6.09531 9.29786C6.33904 9.45382 6.54602 9.6608 6.70198 9.90453C6.87829 10.1801 6.96294 10.5187 7.13225 11.1959L7.99992 14.6666L8.86758 11.1959C9.03689 10.5187 9.12155 10.1801 9.29786 9.90453C9.45382 9.6608 9.6608 9.45382 9.90453 9.29786C10.1801 9.12155 10.5187 9.03689 11.1959 8.86758L14.6666 7.99992L11.1959 7.13225C10.5187 6.96294 10.1801 6.87829 9.90453 6.70198C9.6608 6.54602 9.45382 6.33904 9.29786 6.09531C9.12155 5.81977 9.03689 5.48115 8.86758 4.80391L7.99992 1.33325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
