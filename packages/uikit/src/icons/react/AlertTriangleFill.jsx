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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.717 3.01266C12.9539 1.66245 11.0461 1.66245 10.283 3.01266L1.26858 18.962C0.50546 20.3122 1.45936 22 2.98561 22H21.0144C22.5406 22 23.4945 20.3122 22.7314 18.962L13.717 3.01266ZM13 9.50415C13 8.95187 12.5523 8.50415 12 8.50415C11.4477 8.50415 11 8.95187 11 9.50415V13.5042C11 14.0564 11.4477 14.5042 12 14.5042C12.5523 14.5042 13 14.0564 13 13.5042V9.50415ZM12 16.5042C11.4477 16.5042 11 16.9519 11 17.5042C11 18.0564 11.4477 18.5042 12 18.5042H12.01C12.5623 18.5042 13.01 18.0564 13.01 17.5042C13.01 16.9519 12.5623 16.5042 12.01 16.5042H12Z"
        clipRule="evenodd"
        strokeWidth="inherit"
        stroke="currentColor"
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
