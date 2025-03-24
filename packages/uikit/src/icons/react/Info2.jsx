import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInfo2 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M11.5 11.5V18.5H13.5V11.5H11.5ZM12.5 18.5V11.5H10.5V18.5H12.5ZM12 18C12.2761 18 12.5 18.2239 12.5 18.5H10.5C10.5 19.3284 11.1716 20 12 20V18ZM11.5 18.5C11.5 18.2239 11.7239 18 12 18V20C12.8284 20 13.5 19.3284 13.5 18.5H11.5ZM12 12C11.7239 12 11.5 11.7761 11.5 11.5H13.5C13.5 10.6716 12.8284 10 12 10V12ZM12 10C11.1716 10 10.5 10.6716 10.5 11.5H12.5C12.5 11.7761 12.2761 12 12 12V10ZM12 6V8C13.1046 8 14 7.10457 14 6H12ZM12 6H10C10 7.10457 10.8954 8 12 8V6ZM12 6V4C10.8954 4 10 4.89543 10 6H12ZM12 6H14C14 4.89543 13.1046 4 12 4V6Z"
        fill="currentColor"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInfo2)
const Info2 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Info2', props.className].join(' ')}
    />
  )
})
Info2.displayName = 'IconInfo2'
export default Info2
