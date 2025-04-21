import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUpLeft = (props, ref) => {
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
        d="M9.72629 14.4404C7.50217 15.0343 5.03074 14.4589 3.28587 12.714C0.682378 10.1105 0.682378 5.88943 3.28587 3.28593C5.88937 0.682439 10.1105 0.682439 12.714 3.28593C14.4588 5.0308 15.0343 7.50223 14.4403 9.72635M6.00008 10V6.00005M6.00008 6.00005H10.0001M6.00008 6.00005L12.6666 12.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenUpLeft)
const ArrowCircleBrokenUpLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenUpLeft', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenUpLeft.displayName = 'IconArrowCircleBrokenUpLeft'
export default ArrowCircleBrokenUpLeft
