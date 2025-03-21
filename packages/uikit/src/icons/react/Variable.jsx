import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVariable = (props, ref) => {
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
        d="M13.2709 14C14.1644 12.1926 14.6668 10.1553 14.6668 8C14.6668 5.84474 14.1644 3.80744 13.2709 2M2.72945 2C1.83592 3.80744 1.3335 5.84474 1.3335 8C1.3335 10.1553 1.83592 12.1926 2.72945 14M11.0326 5.75H10.9728C10.5372 5.75 10.1233 5.94134 9.83986 6.27381L6.25664 10.4762C5.97315 10.8087 5.5593 11 5.1237 11H5.06392M5.81005 5.75H6.73944C7.07256 5.75 7.36531 5.97198 7.45682 6.29396L8.63978 10.456C8.73129 10.778 9.02404 11 9.35716 11H10.2866"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVariable)
const Variable = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Variable'].join(' ')}
    />
  )
})
Variable.displayName = 'IconVariable'
export default Variable
