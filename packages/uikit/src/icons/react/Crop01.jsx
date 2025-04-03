import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCrop01 = (props, ref) => {
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
        d="M1.3335 4.00016H9.86683C10.6136 4.00016 10.9869 4.00016 11.2722 4.14549C11.523 4.27332 11.727 4.47729 11.8548 4.72817C12.0002 5.01339 12.0002 5.38676 12.0002 6.1335V14.6668M14.6668 12.0002L6.1335 12.0002C5.38676 12.0002 5.01339 12.0002 4.72818 11.8548C4.47729 11.727 4.27332 11.523 4.14549 11.2722C4.00016 10.9869 4.00016 10.6136 4.00016 9.86683V1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCrop01)
const Crop01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Crop01', props.className].join(' ')}
    />
  )
})
Crop01.displayName = 'IconCrop01'
export default Crop01
