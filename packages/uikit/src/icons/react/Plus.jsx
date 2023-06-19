import * as React from 'react'
const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="M12 5v14m-7-7h14"
    />
  </svg>
)
export default Plus
