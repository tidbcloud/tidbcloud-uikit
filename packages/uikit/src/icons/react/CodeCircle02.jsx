import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCodeCircle02 = (props, ref) => {
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
        d="M9.33334 11.3335L11.3333 9.3335L9.33334 7.3335M6.66667 4.66683L4.66667 6.66683L6.66667 8.66683M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8 14.6668C4.3181 14.6668 1.33334 11.6821 1.33334 8.00016C1.33334 4.31826 4.3181 1.3335 8 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCodeCircle02)
const CodeCircle02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CodeCircle02', props.className].join(' ')}
    />
  )
})
CodeCircle02.displayName = 'IconCodeCircle02'
export default CodeCircle02
