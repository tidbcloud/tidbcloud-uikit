import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw04 = (props, ref) => {
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
        d="M11.3333 3.41692C12.7475 4.44727 13.6666 6.11629 13.6666 7.99998C13.6666 11.1296 11.1295 13.6666 7.99992 13.6666H7.66659M4.66659 12.5831C3.25236 11.5527 2.33325 9.88367 2.33325 7.99998C2.33325 4.87037 4.87031 2.33332 7.99992 2.33332H8.33325M8.66659 14.9333L7.33325 13.6L8.66659 12.2666M7.33325 3.73332L8.66659 2.39998L7.33325 1.06665"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw04)
const RefreshCw04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCw04', props.className].join(' ')}
    />
  )
})
RefreshCw04.displayName = 'IconRefreshCw04'
export default RefreshCw04
