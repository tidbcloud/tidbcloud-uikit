import * as React from 'react'
const SeeMore = (props) => (
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
      d="M16 10H3m17-4H3m17 8H3m13 4H3"
    />
  </svg>
)
export default SeeMore
