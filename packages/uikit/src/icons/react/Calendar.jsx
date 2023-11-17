import * as React from 'react'
import { forwardRef } from 'react'
const Calendar = (props, ref) => {
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
      viewBox="0 0 14 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 6.667H1m8.667-5.334V4M4.333 1.333V4M4.2 14.667h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1 4.187 1 4.747 1 5.867v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Calendar)
export default ForwardRef
