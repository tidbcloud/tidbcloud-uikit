import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellRinging03 = (props, ref) => {
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
        d="M15 19a3 3 0 1 1-6 0m4.797-12.761a2.5 2.5 0 1 0-3.593 0M2.547 8.323a4.01 4.01 0 0 1 2.032-3.52m16.874 3.52a4.01 4.01 0 0 0-2.032-3.52m-1.42 6.397c0-1.38-.633-2.702-1.758-3.677S13.592 6 12 6c-1.591 0-3.117.548-4.242 1.523S6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.804 1.36-1.207 2.041-1.19 2.204.017.186.05.244.202.355.131.096.794.096 2.118.096h12.284c1.325 0 1.987 0 2.119-.096.15-.11.184-.17.202-.355.016-.163-.386-.843-1.19-2.204C18.565 15.15 18 13.482 18 11.2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellRinging03)
const BellRinging03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BellRinging03'].join(' ')}
    />
  )
})
BellRinging03.displayName = 'IconBellRinging03'
export default BellRinging03
