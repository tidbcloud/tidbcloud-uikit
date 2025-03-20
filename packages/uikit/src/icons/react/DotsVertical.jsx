import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotsVertical = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 13C12.5523 13 13 12.5523 13 12 13 11.4477 12.5523 11 12 11 11.4477 11 11 11.4477 11 12 11 12.5523 11.4477 13 12 13ZM12 6C12.5523 6 13 5.55228 13 5 13 4.44772 12.5523 4 12 4 11.4477 4 11 4.44772 11 5 11 5.55228 11.4477 6 12 6ZM12 20C12.5523 20 13 19.5523 13 19 13 18.4477 12.5523 18 12 18 11.4477 18 11 18.4477 11 19 11 19.5523 11.4477 20 12 20Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotsVertical)
const DotsVertical = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DotsVertical'].join(' ')}
    />
  )
})
DotsVertical.displayName = 'IconDotsVertical'
export default DotsVertical
