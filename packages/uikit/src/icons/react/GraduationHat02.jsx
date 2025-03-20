import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGraduationHat02 = (props, ref) => {
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
        d="M17 14.5v-3.005c0-.18 0-.27-.027-.349a.5.5 0 0 0-.116-.187c-.058-.06-.139-.1-.3-.18L12 8.5m-8 1v6.807c0 .372 0 .558.058.72a1 1 0 0 0 .244.381c.124.12.293.198.631.353l6.4 2.934c.246.112.368.168.496.19q.171.03.342 0c.128-.022.25-.078.496-.19l6.4-2.934c.338-.155.507-.232.63-.353a1 1 0 0 0 .245-.38c.058-.163.058-.35.058-.721V9.5m-18-1 9.642-4.821c.131-.066.197-.098.266-.111a.5.5 0 0 1 .184 0c.069.013.135.045.266.11L22 8.5l-9.642 4.821c-.131.066-.197.099-.266.111a.5.5 0 0 1-.184 0c-.069-.012-.135-.045-.266-.11z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGraduationHat02)
const GraduationHat02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'GraduationHat02'].join(' ')}
    />
  )
})
GraduationHat02.displayName = 'IconGraduationHat02'
export default GraduationHat02
