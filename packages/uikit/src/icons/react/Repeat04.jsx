import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRepeat04 = (props, ref) => {
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
        d="M8.00016 13.6666C11.1298 13.6666 13.6668 11.1296 13.6668 7.99998C13.6668 6.11629 12.7477 4.44727 11.3335 3.41692M8.66683 14.9333L7.3335 13.6L8.66683 12.2666M8.00016 2.33332C4.87055 2.33332 2.3335 4.87037 2.3335 7.99998C2.3335 9.88367 3.25261 11.5527 4.66683 12.5831M7.3335 3.73332L8.66683 2.39998L7.3335 1.06665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRepeat04)
const Repeat04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Repeat04', props.className].join(' ')}
    />
  )
})
Repeat04.displayName = 'IconRepeat04'
export default Repeat04
