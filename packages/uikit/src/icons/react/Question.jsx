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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M4.66675 4.8032C4.91734 4.09084 5.41195 3.49016 6.06299 3.10754C6.71403 2.72492 7.47947 2.58506 8.22375 2.71272C8.96803 2.84038 9.64311 3.22734 10.1294 3.80504C10.6157 4.38275 10.8819 5.11393 10.8808 5.86907C10.8808 8.00082 7.68316 9.06669 7.68316 9.06669V10.6667M7.72439 13.3334H7.73861"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Question', props.className].join(' ')}
    />
  )
})
Question.displayName = 'IconQuestion'
export default Question
