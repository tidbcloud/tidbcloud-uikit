import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnnotationAlert = (props, ref) => {
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
        d="M12 10.5V7m0 7h.01M9.9 19.2l1.46 1.947c.217.29.326.434.459.486a.5.5 0 0 0 .362 0c.133-.052.242-.197.459-.486L14.1 19.2c.293-.39.44-.586.619-.735a2 2 0 0 1 .822-.412c.226-.053.47-.053.959-.053 1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 15.597 21 14.898 21 13.5V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.7c0 1.398 0 2.097.228 2.648a3 3 0 0 0 1.624 1.624C5.403 18 6.102 18 7.5 18c.489 0 .733 0 .96.053a2 2 0 0 1 .821.412c.18.149.326.344.619.735"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnnotationAlert)
const AnnotationAlert = forwardRef((props, ref) => {
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
AnnotationAlert.displayName = 'IconAnnotationAlert'
export default AnnotationAlert
