import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeedometer02 = (props, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12m20 0c0-5.523-4.477-10-10-10m10 10h-2.5M2 12C2 6.477 6.477 2 12 2M2 12h2.5M12 2v2.5m7.078.5L13.5 10.5m5.578 8.578-.203-.203c-.692-.692-1.038-1.038-1.442-1.286a4 4 0 0 0-1.156-.479c-.46-.11-.95-.11-1.928-.11H9.651c-.978 0-1.468 0-1.928.11a4 4 0 0 0-1.156.48c-.404.247-.75.593-1.442 1.285l-.203.203M4.922 5l1.736 1.736M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeedometer02)
const Speedometer02 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={[props.className, 'tiui-icon', 'Speedometer02'].join(' ')}
    />
  )
})
Speedometer02.displayName = 'IconSpeedometer02'
export default Speedometer02
