import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerRightDown = (props, ref) => {
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
        d="M2 2.66663H4.26667C6.50688 2.66663 7.62698 2.66663 8.48263 3.1026C9.23528 3.48609 9.8472 4.09802 10.2307 4.85066C10.6667 5.70631 10.6667 6.82642 10.6667 9.06663L10.6667 13.3333M10.6667 13.3333L7.33333 9.99996M10.6667 13.3333L14 9.99996"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerRightDown)
const CornerRightDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerRightDown', props.className].join(' ')}
    />
  )
})
CornerRightDown.displayName = 'IconCornerRightDown'
export default CornerRightDown
