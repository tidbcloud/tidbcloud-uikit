import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSignal02 = (props, ref) => {
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
        d="M10.8283 3.83822C12.3904 5.40031 12.3904 7.93297 10.8283 9.49507M5.17139 9.49507C3.6093 7.93297 3.6093 5.40031 5.17139 3.83822M3.28563 11.3807C0.682134 8.77723 0.682134 4.55613 3.28563 1.95264M12.714 1.95264C15.3175 4.55613 15.3175 8.77723 12.714 11.3807M7.99982 8C8.7362 8 9.33315 7.40305 9.33315 6.66667C9.33315 5.93029 8.7362 5.33333 7.99982 5.33333C7.26344 5.33333 6.66649 5.93029 6.66649 6.66667C6.66649 7.40305 7.26344 8 7.99982 8ZM7.99982 8V14"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSignal02)
const Signal02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Signal02', props.className].join(' ')}
    />
  )
})
Signal02.displayName = 'IconSignal02'
export default Signal02
