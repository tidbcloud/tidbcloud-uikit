import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileQuestion02 = (props, ref) => {
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
        d="M20 9.5V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22H14m0-11H8m2 4H8m8-8H8m8.5 8.002a2.249 2.249 0 0 1 4.37.75c0 1.499-2.25 2.248-2.25 2.248m.03 3h.01"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileQuestion02)
const FileQuestion02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FileQuestion02'].join(' ')}
    />
  )
})
FileQuestion02.displayName = 'IconFileQuestion02'
export default FileQuestion02
