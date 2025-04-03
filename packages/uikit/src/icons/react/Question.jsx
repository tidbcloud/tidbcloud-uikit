import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconQuestion = (props, ref) => {
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
        d="M4.66699 4.8032C4.91758 4.09084 5.4122 3.49016 6.06324 3.10754C6.71427 2.72492 7.47972 2.58506 8.22399 2.71272C8.96827 2.84038 9.64335 3.22734 10.1297 3.80504C10.616 4.38275 10.8821 5.11393 10.881 5.86907C10.881 8.00082 7.68341 9.06669 7.68341 9.06669V10.6667M7.72463 13.3334H7.73885"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Question', props.className].join(' ')}
    />
  )
})
Question.displayName = 'IconQuestion'
export default Question
