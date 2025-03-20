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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="M7 7.205a4.796 4.796 0 0 1 9.321 1.599c0 3.197-4.796 4.796-4.796 4.796V16m.061 4h.022"
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
