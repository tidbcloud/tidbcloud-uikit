import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCertificate01 = (props, ref) => {
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
        d="M6.5 20H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0h.021L8.83 22.193 6 19.364l3.02-3.02M12 19l3.193 3.193 2.828-2.829-3.02-3.02M9 6h6M7 9.5h10"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCertificate01)
const Certificate01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Certificate01'].join(' ')}
    />
  )
})
Certificate01.displayName = 'IconCertificate01'
export default Certificate01
