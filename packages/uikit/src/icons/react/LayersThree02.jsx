import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLayersThree02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 9.5 2 12l9.642 4.821c.131.066.197.099.266.111q.091.018.184 0c.069-.012.135-.045.266-.11L22 12l-5-2.5m-10 5L2 17l9.642 4.821c.131.066.197.099.266.111q.091.018.184 0c.069-.012.135-.045.266-.11L22 17l-5-2.5M2 7l9.642-4.821c.131-.066.197-.098.266-.111a.5.5 0 0 1 .184 0c.069.013.135.045.266.11L22 7l-9.642 4.821c-.131.066-.197.099-.266.111a.5.5 0 0 1-.184 0c-.069-.012-.135-.045-.266-.11z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLayersThree02)
const LayersThree02 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
LayersThree02.displayName = 'IconLayersThree02'
export default LayersThree02
