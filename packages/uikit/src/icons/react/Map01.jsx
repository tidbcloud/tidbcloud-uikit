import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMap01 = (props, ref) => {
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
        d="M6.00016 12.0002L1.3335 14.6668V4.00016L6.00016 1.3335M6.00016 12.0002L10.6668 14.6668M6.00016 12.0002V1.3335M10.6668 14.6668L14.6668 12.0002V1.3335L10.6668 4.00016M10.6668 14.6668V4.00016M10.6668 4.00016L6.00016 1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMap01)
const Map01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Map01', props.className].join(' ')}
    />
  )
})
Map01.displayName = 'IconMap01'
export default Map01
