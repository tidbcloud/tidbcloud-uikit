import * as React from 'react'
import { forwardRef } from 'react'
const Pencil01 = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="m2.5 21.5 5.55-2.134c.354-.137.532-.205.698-.294.147-.08.288-.171.42-.274.149-.115.283-.25.552-.518L21 7a2.828 2.828 0 1 0-4-4L5.72 14.28c-.269.268-.403.403-.519.552a2.997 2.997 0 0 0-.273.42c-.089.166-.157.344-.294.699L2.5 21.5Zm0 0 2.058-5.351c.147-.383.221-.575.347-.662a.5.5 0 0 1 .38-.08c.15.028.295.173.585.463l2.26 2.26c.29.29.435.434.464.585a.5.5 0 0 1-.08.38c-.089.126-.28.2-.663.347L2.5 21.5Z"
    />
  </svg>
)
const ForwardRef = forwardRef(Pencil01)
export default ForwardRef
