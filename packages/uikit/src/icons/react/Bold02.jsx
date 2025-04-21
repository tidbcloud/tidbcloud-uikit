import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBold02 = (props, ref) => {
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
        d="M4.00008 2.6665V13.3332M6.33341 2.6665H10.3334C11.8062 2.6665 13.0001 3.86041 13.0001 5.33317C13.0001 6.80593 11.8062 7.99984 10.3334 7.99984H6.33341H11.0001C12.4728 7.99984 13.6667 9.19374 13.6667 10.6665C13.6667 12.1393 12.4728 13.3332 11.0001 13.3332H6.33341M6.33341 2.6665V13.3332M6.33341 2.6665H2.66675M6.33341 13.3332H2.66675"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBold02)
const Bold02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Bold02', props.className].join(' ')}
    />
  )
})
Bold02.displayName = 'IconBold02'
export default Bold02
