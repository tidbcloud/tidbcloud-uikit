import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconQuestion = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 7.20477C7.37589 6.13624 8.11781 5.23521 9.09436 4.66128C10.0709 4.08735 11.2191 3.87755 12.3355 4.06905C13.4519 4.26054 14.4645 4.84097 15.194 5.70753C15.9235 6.57409 16.3227 7.67086 16.321 8.80358C16.321 12.0012 11.5246 13.6 11.5246 13.6V16M11.5865 20H11.6078"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconQuestion)
const Question = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Question'].join(' ')}
    />
  )
})
Question.displayName = 'IconQuestion'
export default Question
