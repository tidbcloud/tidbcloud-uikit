import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUpRight = (props, ref) => {
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
        d="M1.55963 9.72635C0.965678 7.50224 1.54113 5.0308 3.286 3.28593C5.88949 0.682439 10.1106 0.682439 12.7141 3.28593C15.3176 5.88943 15.3176 10.1105 12.7141 12.714C10.9692 14.4589 8.49778 15.0343 6.27367 14.4404M10.0001 10V6.00005M10.0001 6.00005H6.00013M10.0001 6.00005L3.33334 12.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenUpRight)
const ArrowCircleBrokenUpRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenUpRight', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenUpRight.displayName = 'IconArrowCircleBrokenUpRight'
export default ArrowCircleBrokenUpRight
