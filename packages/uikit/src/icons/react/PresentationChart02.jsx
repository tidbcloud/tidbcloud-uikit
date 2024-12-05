import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPresentationChart02 = (props, ref) => {
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
        d="M12 16v5m6 0-3.951-3.293c-.73-.607-1.094-.91-1.5-1.027a2 2 0 0 0-1.098 0c-.406.116-.77.42-1.5 1.027L6 21m2-10v1m4-3v3m4-5v5m6-9H2m1 0h18v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 16 17.88 16 16.2 16H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 13.72 3 12.88 3 11.2z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPresentationChart02)
const PresentationChart02 = forwardRef((props, ref) => {
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
PresentationChart02.displayName = 'IconPresentationChart02'
export default PresentationChart02
