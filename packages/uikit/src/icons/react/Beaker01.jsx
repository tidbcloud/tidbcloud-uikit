import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBeaker01 = (props, ref) => {
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
        d="M10 2v4.66c0 .218 0 .326-.033.413a.5.5 0 0 1-.138.198c-.07.06-.183.102-.409.185a7.5 7.5 0 1 0 5.16 0c-.226-.083-.339-.125-.409-.185a.47.47 0 0 1-.138-.198C14 6.986 14 6.878 14 6.66V2M8.5 2h7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBeaker01)
const Beaker01 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Beaker01.displayName = 'IconBeaker01'
export default Beaker01
