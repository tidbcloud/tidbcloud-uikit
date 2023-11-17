import * as React from 'react'
import { forwardRef } from 'react'
const MedicalCircle = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.833 7.3c0-.28 0-.42-.054-.527a.5.5 0 0 0-.219-.218c-.107-.055-.247-.055-.527-.055h-2.066c-.28 0-.42 0-.527.054a.5.5 0 0 0-.219.219c-.054.107-.054.247-.054.527v2.067c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055H7.3c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219c-.055.107-.055.247-.055.527v2.066c0 .28 0 .42.054.527a.5.5 0 0 0 .219.219c.107.054.247.054.527.054h2.067c.28 0 .42 0 .527.055.094.048.17.124.218.218.055.107.055.247.055.527V16.7c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218c.107.055.247.055.527.055h2.066c.28 0 .42 0 .527-.055a.5.5 0 0 0 .219-.218c.054-.107.054-.247.054-.527v-2.067c0-.28 0-.42.055-.527a.501.501 0 0 1 .218-.218c.107-.055.247-.055.527-.055H16.7c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219c.055-.107.055-.247.055-.527v-2.066c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219c-.107-.054-.247-.054-.527-.054h-2.067c-.28 0-.42 0-.527-.055a.501.501 0 0 1-.218-.218c-.055-.107-.055-.247-.055-.527V7.3Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MedicalCircle)
export default ForwardRef
