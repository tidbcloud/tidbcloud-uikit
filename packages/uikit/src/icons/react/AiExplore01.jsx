import * as React from 'react'
import { forwardRef } from 'react'
const AiExplore01 = (props, ref) => {
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
        fill="currentColor"
        d="M20.293 21.707a1 1 0 0 0 1.414-1.414l-1.414 1.414Zm-2.086-4.914a1 1 0 0 0-1.414 1.414l1.414-1.414ZM7.97 12.158a1 1 0 1 0 0 2v-2Zm3.394 2a1 1 0 1 0 0-2v2Zm-5.304.5a1 1 0 0 0 1.88.683l-1.88-.682ZM9.54 8l.928-.37a1 1 0 0 0-1.868.029L9.54 8Zm1.865 7.37a1 1 0 1 0 1.857-.74l-1.857.74ZM16 8a1 1 0 1 0-2 0h2Zm-2 7a1 1 0 1 0 2 0h-2Zm7.707 5.293-3.5-3.5-1.414 1.414 3.5 3.5 1.414-1.414ZM19 11.5a7.5 7.5 0 0 1-7.5 7.5v2a9.5 9.5 0 0 0 9.5-9.5h-2ZM11.5 19A7.5 7.5 0 0 1 4 11.5H2a9.5 9.5 0 0 0 9.5 9.5v-2ZM4 11.5A7.5 7.5 0 0 1 11.5 4V2A9.5 9.5 0 0 0 2 11.5h2ZM11.5 4a7.5 7.5 0 0 1 7.5 7.5h2A9.5 9.5 0 0 0 11.5 2v2ZM7.97 14.158h3.394v-2H7.97v2Zm-.03 1.183 2.54-7L8.6 7.66l-2.54 7 1.88.682Zm.67-6.97 2.795 7 1.857-.742-2.794-7-1.857.742ZM14 8v7h2V8h-2Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(AiExplore01)
export default ForwardRef
