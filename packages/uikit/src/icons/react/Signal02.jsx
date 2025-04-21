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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M10.8285 3.83822C12.3906 5.40031 12.3906 7.93297 10.8285 9.49507M5.17164 9.49507C3.60954 7.93297 3.60954 5.40031 5.17164 3.83822M3.28587 11.3807C0.682378 8.77723 0.682378 4.55613 3.28587 1.95264M12.7143 1.95264C15.3178 4.55613 15.3178 8.77723 12.7143 11.3807M8.00007 8C8.73645 8 9.3334 7.40305 9.3334 6.66667C9.3334 5.93029 8.73645 5.33333 8.00007 5.33333C7.26369 5.33333 6.66673 5.93029 6.66673 6.66667C6.66673 7.40305 7.26369 8 8.00007 8ZM8.00007 8V14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
