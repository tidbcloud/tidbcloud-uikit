import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGraduationHat01 = (props, ref) => {
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
        d="M5 10v6.011c0 .36 0 .539.055.697a1 1 0 0 0 .23.374c.118.12.278.2.6.36l5.4 2.7c.262.131.393.197.53.223q.186.034.37 0c.137-.026.268-.091.53-.223l5.4-2.7c.322-.16.482-.24.6-.36a1 1 0 0 0 .23-.374c.055-.158.055-.338.055-.697v-6.01M2 8.5l9.642-4.822c.131-.066.197-.098.266-.111a.5.5 0 0 1 .184 0c.069.013.135.045.266.11L22 8.5l-9.642 4.821c-.131.066-.197.099-.266.111a.5.5 0 0 1-.184 0c-.069-.012-.135-.045-.266-.11z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGraduationHat01)
const GraduationHat01 = forwardRef((props, ref) => {
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
GraduationHat01.displayName = 'IconGraduationHat01'
export default GraduationHat01
