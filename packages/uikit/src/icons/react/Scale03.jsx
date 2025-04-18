import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconScale03 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.8 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 14 4.08 14 5.2 14h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C14 12.48 14 11.92 14 10.8V5.2M10.8 2c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C14 3.52 14 4.08 14 5.2M10.8 2h-.667c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583C8 3.013 8 3.387 8 4.133v1.734c0 .746 0 1.12.145 1.405.128.25.332.455.583.583C9.013 8 9.387 8 10.133 8h1.734c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583C14 6.987 14 6.613 14 5.867V5.2M8.333 7.667l-3.666 3.666m0 0H8m-3.333 0V8"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconScale03)
const Scale03 = forwardRef((props, ref) => {
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
Scale03.displayName = 'IconScale03'
export default Scale03
