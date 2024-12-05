import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconContrast01 = (props, ref) => {
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
        d="M12 2q.889 0 1.735.15M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10m0-20v20m5.738-18.191c.954.67 1.786 1.502 2.455 2.456m1.657 4a10 10 0 0 1 0 3.47m-1.66 4.006c-.67.952-1.5 1.782-2.453 2.45m-4.004 1.66q-.845.148-1.733.149"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconContrast01)
const Contrast01 = forwardRef((props, ref) => {
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
Contrast01.displayName = 'IconContrast01'
export default Contrast01
