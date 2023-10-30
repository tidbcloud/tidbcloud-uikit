import * as React from 'react'
import { forwardRef } from 'react'
const ShieldTick = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 16 19"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="m5.5 9.583 1.667 1.667 3.75-3.75m3.75 2.5c0 4.09-4.462 7.065-6.085 8.012-.185.108-.277.162-.407.19a.95.95 0 0 1-.35 0c-.13-.028-.222-.082-.407-.19C5.795 17.065 1.333 14.09 1.333 10V6.015c0-.667 0-1 .11-1.286.096-.253.252-.479.455-.658.23-.202.542-.32 1.166-.553l4.468-1.676a1.77 1.77 0 0 1 .349-.11.833.833 0 0 1 .238 0c.09.013.176.045.35.11l4.467 1.676c.624.234.936.35 1.166.553.203.18.36.405.456.658.109.286.109.62.109 1.286V10Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ShieldTick)
export default ForwardRef
