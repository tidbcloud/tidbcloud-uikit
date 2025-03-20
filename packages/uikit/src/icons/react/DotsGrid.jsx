import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotsGrid = (props, ref) => {
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
        d="M12 6C12.5523 6 13 5.55228 13 5 13 4.44772 12.5523 4 12 4 11.4477 4 11 4.44772 11 5 11 5.55228 11.4477 6 12 6ZM12 13C12.5523 13 13 12.5523 13 12 13 11.4477 12.5523 11 12 11 11.4477 11 11 11.4477 11 12 11 12.5523 11.4477 13 12 13ZM12 20C12.5523 20 13 19.5523 13 19 13 18.4477 12.5523 18 12 18 11.4477 18 11 18.4477 11 19 11 19.5523 11.4477 20 12 20ZM19 6C19.5523 6 20 5.55228 20 5 20 4.44772 19.5523 4 19 4 18.4477 4 18 4.44772 18 5 18 5.55228 18.4477 6 19 6ZM19 13C19.5523 13 20 12.5523 20 12 20 11.4477 19.5523 11 19 11 18.4477 11 18 11.4477 18 12 18 12.5523 18.4477 13 19 13ZM19 20C19.5523 20 20 19.5523 20 19 20 18.4477 19.5523 18 19 18 18.4477 18 18 18.4477 18 19 18 19.5523 18.4477 20 19 20ZM5 6C5.55228 6 6 5.55228 6 5 6 4.44772 5.55228 4 5 4 4.44772 4 4 4.44772 4 5 4 5.55228 4.44772 6 5 6ZM5 13C5.55228 13 6 12.5523 6 12 6 11.4477 5.55228 11 5 11 4.44772 11 4 11.4477 4 12 4 12.5523 4.44772 13 5 13ZM5 20C5.55228 20 6 19.5523 6 19 6 18.4477 5.55228 18 5 18 4.44772 18 4 18.4477 4 19 4 19.5523 4.44772 20 5 20Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotsGrid)
const DotsGrid = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DotsGrid'].join(' ')}
    />
  )
})
DotsGrid.displayName = 'IconDotsGrid'
export default DotsGrid
