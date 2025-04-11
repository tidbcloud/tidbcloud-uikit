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
      ref={ref}
      {...props}
    >
      <path
        d="M11.3335 12.5831C12.7477 11.5527 13.6668 9.88367 13.6668 7.99998C13.6668 4.87037 11.1298 2.33332 8.00016 2.33332H7.66683M8.00016 13.6666C4.87055 13.6666 2.3335 11.1296 2.3335 7.99998C2.3335 6.11629 3.25261 4.44727 4.66683 3.41692M7.3335 14.9333L8.66683 13.6L7.3335 12.2666M8.66683 3.73332L7.3335 2.39998L8.66683 1.06665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
