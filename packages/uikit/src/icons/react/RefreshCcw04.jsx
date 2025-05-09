import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw04 = (props, ref) => {
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
        d="M11.3333 12.5831C12.7475 11.5527 13.6666 9.88367 13.6666 7.99998C13.6666 4.87037 11.1295 2.33332 7.99992 2.33332H7.66659M7.99992 13.6666C4.87031 13.6666 2.33325 11.1296 2.33325 7.99998C2.33325 6.11629 3.25236 4.44727 4.66659 3.41692M7.33325 14.9333L8.66659 13.6L7.33325 12.2666M8.66659 3.73332L7.33325 2.39998L8.66659 1.06665"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw04)
const RefreshCcw04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCcw04', props.className].join(' ')}
    />
  )
})
RefreshCcw04.displayName = 'IconRefreshCcw04'
export default RefreshCcw04
