import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGroupingUpAndDown = (props, ref) => {
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
      <path d="M2 5H4V11H2V5Z" fill="#C4CDD0" />
      <path d="M5.33333 5.75H7.33333V7.25H5.33333V5.75Z" fill="#C4CDD0" />
      <path d="M8.66667 2H10.6667V9.5H8.66667V2Z" fill="#C4CDD0" />
      <path d="M12 8H14V11.75H12V8Z" fill="#C4CDD0" />
      <path d="M2 11H4V14H2V11Z" fill="#383E40" />
      <path d="M5.33333 7.25H7.33333V14H5.33333V7.25Z" fill="#383E40" />
      <path d="M8.66667 9.5H10.6667V14H8.66667V9.5Z" fill="#383E40" />
      <path d="M12 11.75H14V14H12V11.75Z" fill="#383E40" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGroupingUpAndDown)
const GroupingUpAndDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GroupingUpAndDown', props.className].join(' ')}
    />
  )
})
GroupingUpAndDown.displayName = 'IconGroupingUpAndDown'
export default GroupingUpAndDown
