import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellOff03 = (props, ref) => {
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
        d="M15 19a3 3 0 1 1-6 0M7.377 7.885C6.491 8.813 6 9.985 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.052.244.202.355.132.096.795.096 2.12.096H19.88M12 6q-.44 0-.87.055c-.382.048-.572.073-.764.02a1.2 1.2 0 0 1-.446-.259c-.14-.14-.17-.215-.232-.363a2.5 2.5 0 1 1 4.108.786A6.9 6.9 0 0 0 12 6m0 0c1.591 0 3.117.548 4.243 1.523C17.368 8.498 18 9.821 18 11.2q.001.502.026.965M21 20 3 4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellOff03)
const BellOff03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BellOff03'].join(' ')}
    />
  )
})
BellOff03.displayName = 'IconBellOff03'
export default BellOff03
