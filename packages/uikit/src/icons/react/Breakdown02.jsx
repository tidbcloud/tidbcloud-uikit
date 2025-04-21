import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBreakdown02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M11.6 8H6.69091M11.6 11H6.69091M11.6 5H6.69091M4.72727 8H4.4M4.72727 11H4.4M4.72727 5H4.4M14 4.88V11.12C14 12.1281 14 12.6321 13.8038 13.0172C13.6312 13.3559 13.3559 13.6312 13.0172 13.8038C12.6321 14 10.9281 14 9.92 14H6.08C5.07192 14 3.36785 14 2.98282 13.8038C2.64413 13.6312 2.36876 13.3559 2.19619 13.0172C2 12.6321 2 12.1281 2 11.12V4.88C2 3.87191 2 3.36786 2.19619 2.98282C2.36876 2.64413 2.64413 2.36876 2.98282 2.19619C3.36785 2 5.07192 2 6.08 2H9.92C10.9281 2 12.6321 2 13.0172 2.19619C13.3559 2.36876 13.6312 2.64413 13.8038 2.98282C14 3.36786 14 3.87191 14 4.88Z"
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
