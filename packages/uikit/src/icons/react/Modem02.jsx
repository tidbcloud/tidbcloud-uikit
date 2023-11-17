import * as React from 'react'
import { forwardRef } from 'react'
const Modem02 = (props, ref) => {
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
        d="M6.205 10.558a6.002 6.002 0 0 1 1.084-5.274m10.506 5.274a6.002 6.002 0 0 0-1.084-5.274M2.341 11.6a10 10 0 0 1 2.106-9.154M21.655 11.6a10 10 0 0 0-2.105-9.154M12 15V9m-6.5 9.5h4M5.2 22h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 15 19.92 15 18.8 15H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 16.52 2 17.08 2 18.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 22 4.08 22 5.2 22Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Modem02)
export default ForwardRef
