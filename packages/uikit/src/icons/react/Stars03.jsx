import * as React from 'react'
import { forwardRef } from 'react'
const Stars03 = (props, ref) => {
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
        d="M18.5 8V3m-13 18v-5M16 5.5h5m-18 13h5M6.5 2l-.784 1.569c-.266.53-.399.796-.576 1.026a3 3 0 0 1-.545.545c-.23.177-.495.31-1.026.576L2 6.5l1.569.784c.53.266.796.399 1.026.576a3 3 0 0 1 .545.545c.177.23.31.495.576 1.026L6.5 11l.784-1.569c.266-.53.399-.796.576-1.026a3 3 0 0 1 .545-.545c.23-.177.495-.31 1.026-.576L11 6.5l-1.569-.784c-.53-.266-.796-.399-1.026-.576a3 3 0 0 1-.545-.545c-.177-.23-.31-.495-.576-1.026L6.5 2ZM17 12l-.951 1.902c-.266.531-.398.797-.576 1.027-.157.204-.34.387-.544.544-.23.178-.496.31-1.027.576L12 17l1.902.951c.531.266.797.398 1.027.576.204.157.387.34.544.544.178.23.31.496.576 1.027L17 22l.951-1.902c.266-.531.398-.797.576-1.027.157-.204.34-.387.544-.544.23-.178.496-.31 1.027-.576L22 17l-1.902-.951c-.531-.266-.797-.398-1.027-.576a3.005 3.005 0 0 1-.544-.544c-.178-.23-.31-.496-.576-1.027L17 12Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Stars03)
export default ForwardRef
