import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPercent02 = (props, ref) => {
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
        d="M12.6666 3.33337L3.33331 12.6667M5.99998 4.66671C5.99998 5.40309 5.40303 6.00004 4.66665 6.00004C3.93027 6.00004 3.33331 5.40309 3.33331 4.66671C3.33331 3.93033 3.93027 3.33337 4.66665 3.33337C5.40303 3.33337 5.99998 3.93033 5.99998 4.66671ZM12.6666 11.3334C12.6666 12.0698 12.0697 12.6667 11.3333 12.6667C10.5969 12.6667 9.99998 12.0698 9.99998 11.3334C9.99998 10.597 10.5969 10 11.3333 10C12.0697 10 12.6666 10.597 12.6666 11.3334Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPercent02)
const Percent02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Percent02', props.className].join(' ')}
    />
  )
})
Percent02.displayName = 'IconPercent02'
export default Percent02
