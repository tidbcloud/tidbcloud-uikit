import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMoon01 = (props, ref) => {
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
        d="M14.6667 10.563C13.7911 10.959 12.8191 11.1794 11.7957 11.1794C7.94357 11.1794 4.82081 8.05664 4.82081 4.20452C4.82081 3.18106 5.04124 2.20909 5.43722 1.3335C3.01721 2.42792 1.33337 4.8633 1.33337 7.69196C1.33337 11.5441 4.45613 14.6668 8.30825 14.6668C11.1369 14.6668 13.5723 12.983 14.6667 10.563Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMoon01)
const Moon01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Moon01', props.className].join(' ')}
    />
  )
})
Moon01.displayName = 'IconMoon01'
export default Moon01
