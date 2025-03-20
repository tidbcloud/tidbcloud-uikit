import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotsHorizontal = (props, ref) => {
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
        d="M12 13C12.5523 13 13 12.5523 13 12 13 11.4477 12.5523 11 12 11 11.4477 11 11 11.4477 11 12 11 12.5523 11.4477 13 12 13ZM19 13C19.5523 13 20 12.5523 20 12 20 11.4477 19.5523 11 19 11 18.4477 11 18 11.4477 18 12 18 12.5523 18.4477 13 19 13ZM5 13C5.55228 13 6 12.5523 6 12 6 11.4477 5.55228 11 5 11 4.44772 11 4 11.4477 4 12 4 12.5523 4.44772 13 5 13Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotsHorizontal)
const DotsHorizontal = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DotsHorizontal'].join(' ')}
    />
  )
})
DotsHorizontal.displayName = 'IconDotsHorizontal'
export default DotsHorizontal
