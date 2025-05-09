import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCodeCircle03 = (props, ref) => {
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
        d="M10.3333 10.0002L12.3333 8.00016L10.3333 6.00016M5.66667 6.00016L3.66667 8.00016L5.66667 10.0002M8.66667 4.66683L7.33334 11.3335M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8 14.6668C4.3181 14.6668 1.33334 11.6821 1.33334 8.00016C1.33334 4.31826 4.3181 1.3335 8 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCodeCircle03)
const CodeCircle03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CodeCircle03', props.className].join(' ')}
    />
  )
})
CodeCircle03.displayName = 'IconCodeCircle03'
export default CodeCircle03
