import * as React from 'react'
import { forwardRef } from 'react'
const LaygroundGrid02 = (props, ref) => {
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
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 6h12M2 10h12M8 2v12M5.2 2h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C14 3.52 14 4.08 14 5.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C12.48 14 11.92 14 10.8 14H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 12.48 2 11.92 2 10.8V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LaygroundGrid02)
export default ForwardRef
