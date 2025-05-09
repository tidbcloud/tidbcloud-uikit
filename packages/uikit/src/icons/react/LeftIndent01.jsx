import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLeftIndent01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14 6.1665H8M14 2.6665H2M14 9.83317H8M14 13.3332H2M2.85333 5.7065L5.43111 7.63984C5.62411 7.78458 5.7206 7.85696 5.75511 7.94568C5.78533 8.02339 5.78533 8.10961 5.75511 8.18733C5.7206 8.27605 5.62411 8.34842 5.43111 8.49317L2.85333 10.4265C2.57868 10.6325 2.44135 10.7355 2.3264 10.7331C2.22637 10.731 2.13256 10.6841 2.07088 10.6053C2 10.5148 2 10.3432 2 9.99984V6.13317C2 5.78985 2 5.6182 2.07088 5.52767C2.13256 5.44889 2.22637 5.40199 2.3264 5.39991C2.44135 5.39752 2.57868 5.50051 2.85333 5.7065Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLeftIndent01)
const LeftIndent01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LeftIndent01', props.className].join(' ')}
    />
  )
})
LeftIndent01.displayName = 'IconLeftIndent01'
export default LeftIndent01
