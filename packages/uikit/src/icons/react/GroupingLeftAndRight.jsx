import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGroupingLeftAndRight = (props, ref) => {
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
      <path d="M2 4.25H3.5V14H2V4.25Z" fill="#C4CDD0" />
      <path d="M6.5 6.5H8V14H6.5V6.5Z" fill="#C4CDD0" />
      <path d="M11 2H12.5V14H11V2Z" fill="#C4CDD0" />
      <path d="M3.5 9.5H5V14H3.5V9.5Z" fill="#383E40" />
      <path d="M8 3.5H9.5V14H8V3.5Z" fill="#383E40" />
      <path d="M12.5 6.5H14V14H12.5V6.5Z" fill="#383E40" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGroupingLeftAndRight)
const GroupingLeftAndRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GroupingLeftAndRight', props.className].join(' ')}
    />
  )
})
GroupingLeftAndRight.displayName = 'IconGroupingLeftAndRight'
export default GroupingLeftAndRight
