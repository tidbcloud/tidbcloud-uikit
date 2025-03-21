import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHurricane01 = (props, ref) => {
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
        d="M16.5 20.5002C15.2465 20.814 13.6884 21 12 21C10.3116 21 8.75349 20.814 7.5 20.5002M18 16.4305C16.5341 16.9842 14.3894 17.3333 12 17.3333C9.61061 17.3333 7.46589 16.9842 6 16.4305M4.5 11.6679C5.93143 12.5598 8.75311 13.1667 12 13.1667C15.2469 13.1667 18.0686 12.5598 19.5 11.6679M21 6C21 7.65685 16.9706 9 12 9C7.02944 9 3 7.65685 3 6C3 4.34315 7.02944 3 12 3C16.9706 3 21 4.34315 21 6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHurricane01)
const Hurricane01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Hurricane01'].join(' ')}
    />
  )
})
Hurricane01.displayName = 'IconHurricane01'
export default Hurricane01
