import * as React from 'react'
import { forwardRef } from 'react'
const LayersThree01 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 12 9.642 4.821c.131.066.197.099.266.111.06.012.123.012.184 0 .069-.012.135-.045.266-.11L22 12M2 17l9.642 4.821c.131.066.197.099.266.111.06.012.123.012.184 0 .069-.012.135-.045.266-.11L22 17M2 7l9.642-4.821c.131-.066.197-.098.266-.111a.5.5 0 0 1 .184 0c.069.013.135.045.266.11L22 7l-9.642 4.821c-.131.066-.197.099-.266.111a.501.501 0 0 1-.184 0c-.069-.012-.135-.045-.266-.11L2 7Z"
    />
  </svg>
)
const ForwardRef = forwardRef(LayersThree01)
export default ForwardRef
