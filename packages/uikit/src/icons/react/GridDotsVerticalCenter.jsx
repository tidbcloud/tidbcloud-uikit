import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGridDotsVerticalCenter = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h.01M3 21h.01M3 16.5h.01M3 7.5h.01M7.5 3h.01M7.5 21h.01M16.5 3h.01m-.01 18h.01M12 3h.01M12 21h.01M12 16.5h.01m-.01-9h.01M21 3h.01M21 21h.01M21 16.5h.01m-.01-9h.01M21 12H3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGridDotsVerticalCenter)
const GridDotsVerticalCenter = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'GridDotsVerticalCenter'].join(' ')}
    />
  )
})
GridDotsVerticalCenter.displayName = 'IconGridDotsVerticalCenter'
export default GridDotsVerticalCenter
