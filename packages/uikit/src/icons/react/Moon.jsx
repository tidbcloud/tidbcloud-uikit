import * as React from 'react'
const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={1.5}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="M18.333 13.203A8.719 8.719 0 0 1 6.796 1.666a8.719 8.719 0 1 0 11.537 11.537Z"
    />
  </svg>
)
export default Moon
