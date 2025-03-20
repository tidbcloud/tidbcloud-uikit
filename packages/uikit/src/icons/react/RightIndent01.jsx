import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRightIndent01 = (props, ref) => {
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
        d="M21 4H3m18 16H3m9-10.75H3m9 5.5H3m16.72-6.29-3.867 2.9c-.29.217-.434.326-.486.459a.5.5 0 0 0 0 .362c.052.133.197.242.486.459l3.867 2.9c.412.309.618.463.79.46a.5.5 0 0 0 .384-.192c.106-.136.106-.393.106-.908V9.1c0-.515 0-.772-.106-.908A.5.5 0 0 0 20.51 8c-.172-.003-.378.151-.79.46"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRightIndent01)
const RightIndent01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RightIndent01'].join(' ')}
    />
  )
})
RightIndent01.displayName = 'IconRightIndent01'
export default RightIndent01
