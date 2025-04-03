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
      ref={ref}
      {...props}
    >
      <path
        d="M1.55975 9.72629C0.9658 7.50217 1.54126 5.03074 3.28612 3.28587C5.88961 0.682378 10.1107 0.682378 12.7142 3.28587C15.3177 5.88937 15.3177 10.1105 12.7142 12.714C10.9693 14.4588 8.49791 15.0343 6.27379 14.4403M10.0003 9.99999V5.99999M10.0003 5.99999H6.00025M10.0003 5.99999L3.33346 12.6666"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
