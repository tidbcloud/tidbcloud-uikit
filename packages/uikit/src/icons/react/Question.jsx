import * as React from 'react'
const Question = (props) => (
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
      d="M7 7.205a4.796 4.796 0 0 1 9.321 1.599c0 3.197-4.796 4.796-4.796 4.796V16m.061 4h.022"
    />
  </svg>
)
export default Question
