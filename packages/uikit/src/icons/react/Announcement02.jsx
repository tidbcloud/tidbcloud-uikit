import * as React from 'react'
import { forwardRef } from 'react'
const Announcement02 = (props, ref) => {
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
        d="m4 14 1.575 6.299c.044.177.066.265.092.343A2 2 0 0 0 7.4 21.992c.08.007.172.007.355.007.228 0 .343 0 .44-.01a2 2 0 0 0 1.797-1.797c.009-.096.009-.21.009-.44V5.5m8.5 8a3.5 3.5 0 1 0 0-7m-8.25-1H6.5a4.5 4.5 0 0 0 0 9h3.75c1.766 0 3.927.947 5.594 1.856.973.53 1.46.795 1.778.756a.946.946 0 0 0 .691-.411c.187-.26.187-.783.187-1.827V5.126c0-1.044 0-1.566-.187-1.827a.946.946 0 0 0-.691-.411c-.319-.039-.805.226-1.778.756-1.667.909-3.828 1.856-5.594 1.856Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Announcement02)
export default ForwardRef
