import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPin01 = (props, ref) => {
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
        d="M12 15v7M8 7.308v2.13c0 .209 0 .313-.02.412a1 1 0 0 1-.09.254c-.045.09-.11.172-.24.334L6.08 12.4c-.666.833-.999 1.249-.999 1.599a1 1 0 0 0 .376.782C5.731 15 6.264 15 7.33 15h9.342c1.066 0 1.599 0 1.873-.219A1 1 0 0 0 18.92 14c0-.35-.333-.766-1-1.599l-1.569-1.962c-.13-.162-.195-.243-.241-.334a1 1 0 0 1-.09-.254C16 9.75 16 9.647 16 9.44v-2.13c0-.116 0-.174.007-.23q.009-.075.029-.15c.015-.055.036-.108.079-.215l1.008-2.52c.294-.735.44-1.102.38-1.397a1 1 0 0 0-.427-.63C16.825 2 16.429 2 15.637 2H8.364c-.792 0-1.188 0-1.44.167a1 1 0 0 0-.426.63c-.06.295.086.662.38 1.397l1.008 2.52c.043.107.064.16.08.215a1 1 0 0 1 .028.15c.006.056.006.114.006.23"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPin01)
const Pin01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Pin01'].join(' ')}
    />
  )
})
Pin01.displayName = 'IconPin01'
export default Pin01
