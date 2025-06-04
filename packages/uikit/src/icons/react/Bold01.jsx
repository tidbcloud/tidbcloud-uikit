import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBold01 = (props, ref) => {
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
        d="M4 7.99984H9.33333C10.8061 7.99984 12 6.80593 12 5.33317C12 3.86041 10.8061 2.6665 9.33333 2.6665H4V7.99984ZM4 7.99984H10C11.4728 7.99984 12.6667 9.19374 12.6667 10.6665C12.6667 12.1393 11.4728 13.3332 10 13.3332H4V7.99984Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBold01)
const Bold01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Bold01', props.className].join(' ')}
    />
  )
})
Bold01.displayName = 'IconBold01'
export default Bold01
