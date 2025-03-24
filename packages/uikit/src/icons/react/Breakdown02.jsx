import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBreakdown02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M17.4 12H10.0364M17.4 16.5H10.0364M17.4 7.5H10.0364M7.09091 12H6.6M7.09091 16.5H6.6M7.09091 7.5H6.6M21 7.32V16.68C21 18.1921 21 18.9482 20.7057 19.5258C20.4469 20.0338 20.0338 20.4469 19.5258 20.7057C18.9482 21 16.3921 21 14.88 21H9.12C7.60788 21 5.05178 21 4.47423 20.7057C3.96619 20.4469 3.55314 20.0338 3.29428 19.5258C3 18.9482 3 18.1921 3 16.68V7.32C3 5.80786 3 5.05179 3.29428 4.47423C3.55314 3.96619 3.96619 3.55314 4.47423 3.29428C5.05178 3 7.60788 3 9.12 3H14.88C16.3921 3 18.9482 3 19.5258 3.29428C20.0338 3.55314 20.4469 3.96619 20.7057 4.47423C21 5.05179 21 5.80786 21 7.32Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBreakdown02)
const Breakdown02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Breakdown02', props.className].join(' ')}
    />
  )
})
Breakdown02.displayName = 'IconBreakdown02'
export default Breakdown02
