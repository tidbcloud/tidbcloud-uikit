import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlertTriangleFill = (props, ref) => {
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
        fillRule="evenodd"
        d="M13.717 3.013a1.962 1.962 0 0 0-3.434 0L1.269 18.962C.505 20.312 1.459 22 2.986 22h18.028c1.527 0 2.48-1.688 1.717-3.038zM13 9.504a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlertTriangleFill)
const AlertTriangleFill = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlertTriangleFill'].join(' ')}
    />
  )
})
AlertTriangleFill.displayName = 'IconAlertTriangleFill'
export default AlertTriangleFill
