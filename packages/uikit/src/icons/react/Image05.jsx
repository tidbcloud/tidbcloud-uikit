import * as React from 'react'
import { forwardRef } from 'react'
const Image05 = (props, ref) => {
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
        d="M19 21h1.01c.972 0 1.457 0 1.725-.203a1 1 0 0 0 .395-.737c.02-.335-.25-.74-.788-1.547l-3.01-4.516c-.446-.668-.668-1.002-.949-1.118a1 1 0 0 0-.766 0c-.28.116-.503.45-.948 1.118l-.745 1.116M19 21 11.316 9.9c-.442-.638-.663-.957-.94-1.07a1 1 0 0 0-.753 0c-.276.113-.497.432-.938 1.07l-5.947 8.59c-.563.813-.844 1.22-.828 1.557a1 1 0 0 0 .391.747C2.57 21 3.065 21 4.054 21H19Zm2-15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Image05)
export default ForwardRef
