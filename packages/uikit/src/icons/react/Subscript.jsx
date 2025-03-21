import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSubscript = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3 5L13 15M13 5L3 15M21 19.0001H17C17 17.5001 17.44 17.0001 18.5 16.5001C19.56 16.0001 21 15.3301 21 14.0001C21 13.5301 20.83 13.0701 20.52 12.7101C20.1999 12.3476 19.7649 12.1061 19.2879 12.026C18.811 11.9459 18.321 12.0321 17.9 12.2701C17.48 12.5101 17.16 12.8901 17 13.3401"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSubscript)
const Subscript = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Subscript'].join(' ')}
    />
  )
})
Subscript.displayName = 'IconSubscript'
export default Subscript
