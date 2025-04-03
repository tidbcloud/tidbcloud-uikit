import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerLeftDown = (props, ref) => {
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
        d="M14 2.66663H11.7333C9.49312 2.66663 8.37302 2.66663 7.51737 3.1026C6.76472 3.48609 6.1528 4.09802 5.76931 4.85066C5.33333 5.70631 5.33333 6.82642 5.33333 9.06663V13.3333M5.33333 13.3333L8.66667 9.99996M5.33333 13.3333L2 9.99996"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerLeftDown)
const CornerLeftDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerLeftDown', props.className].join(' ')}
    />
  )
})
CornerLeftDown.displayName = 'IconCornerLeftDown'
export default CornerLeftDown
