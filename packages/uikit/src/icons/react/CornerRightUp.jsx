import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerRightUp = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M2 13.3333H4.26667C6.50688 13.3333 7.62698 13.3333 8.48263 12.8973C9.23528 12.5138 9.8472 11.9019 10.2307 11.1493C10.6667 10.2936 10.6667 9.1735 10.6667 6.93329L10.6667 2.66663M10.6667 2.66663L7.33333 5.99996M10.6667 2.66663L14 5.99996"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerRightUp)
const CornerRightUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerRightUp', props.className].join(' ')}
    />
  )
})
CornerRightUp.displayName = 'IconCornerRightUp'
export default CornerRightUp
