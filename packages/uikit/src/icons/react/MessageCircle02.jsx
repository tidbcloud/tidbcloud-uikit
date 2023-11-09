import * as React from 'react'
import { forwardRef } from 'react'
const MessageCircle02 = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 0 1-12.385 8.342c-.2-.081-.3-.122-.38-.14a.909.909 0 0 0-.219-.024c-.083 0-.173.015-.353.045l-3.558.593c-.373.062-.56.093-.694.035a.5.5 0 0 1-.262-.262c-.058-.135-.027-.321.035-.694l.593-3.558c.03-.18.045-.27.045-.353a.907.907 0 0 0-.024-.219c-.018-.08-.059-.18-.14-.38A9 9 0 1 1 21 12Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MessageCircle02)
export default ForwardRef
