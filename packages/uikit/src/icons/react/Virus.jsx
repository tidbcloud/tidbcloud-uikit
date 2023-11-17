import * as React from 'react'
import { forwardRef } from 'react'
const Virus = (props, ref) => {
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
        d="M12 2v5m0-5c-.713 0-1.41.075-2.08.217M12 2c.713 0 1.41.075 2.08.217M12 7a5 5 0 0 0-5 5m5-5a5 5 0 0 1 5 5m-5 5v5m0-5a5 5 0 0 0 5-5m-5 5a5 5 0 0 1-5-5m5 10c.712 0 1.407-.075 2.077-.216M12 22c-.715 0-1.412-.075-2.085-.218M4.93 4.93l3.535 3.535m7.072 7.072 3.535 3.535M2 12h5m-5 0c0 .713.075 1.41.217 2.08M2 12c0-.714.075-1.411.217-2.083M17 12h5m0 0c0-.713-.075-1.41-.217-2.08M22 12c0 .713-.075 1.409-.216 2.08M4.928 19.07l3.535-3.536m7.072-7.07 3.535-3.536m-1.624-1.317a10.053 10.053 0 0 1 2.942 2.943m-.003 10.895a10.053 10.053 0 0 1-2.941 2.94m-10.891-.002a10.055 10.055 0 0 1-2.94-2.937M3.613 6.554a10.054 10.054 0 0 1 2.94-2.942"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Virus)
export default ForwardRef
