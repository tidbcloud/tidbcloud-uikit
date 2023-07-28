import * as React from 'react'
import { forwardRef } from 'react'
const ShieldUser = (props, ref) => (
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
      d="M12 14.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 17.907 2 18.604 2 20M14.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM22 16.516c0 2.232-2.342 3.855-3.195 4.372-.096.058-.145.088-.213.103a.476.476 0 0 1-.184 0c-.068-.015-.117-.044-.213-.103-.853-.517-3.195-2.14-3.195-4.372v-2.174c0-.364 0-.546.057-.702a.911.911 0 0 1 .24-.359c.12-.11.284-.174.611-.302L18.254 12c.091-.035.183-.2.183-.2h.126s.092.165.183.2l2.346.98c.327.127.49.19.611.301.107.098.19.22.24.359.057.156.057.338.057.701v2.175Z"
    />
  </svg>
)
const ForwardRef = forwardRef(ShieldUser)
export default ForwardRef
