import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRows01 = (props, ref) => {
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
        d="M17.8 10C18.9201 10 19.4802 10 19.908 9.78201 20.2843 9.59027 20.5903 9.28431 20.782 8.90798 21 8.48016 21 7.92011 21 6.8V6.2C21 5.0799 21 4.51984 20.782 4.09202 20.5903 3.7157 20.2843 3.40973 19.908 3.21799 19.4802 3 18.9201 3 17.8 3L6.2 3C5.0799 3 4.51984 3 4.09202 3.21799 3.71569 3.40973 3.40973 3.71569 3.21799 4.09202 3 4.51984 3 5.07989 3 6.2L3 6.8C3 7.9201 3 8.48016 3.21799 8.90798 3.40973 9.28431 3.71569 9.59027 4.09202 9.78201 4.51984 10 5.07989 10 6.2 10L17.8 10ZM17.8 21C18.9201 21 19.4802 21 19.908 20.782 20.2843 20.5903 20.5903 20.2843 20.782 19.908 21 19.4802 21 18.9201 21 17.8V17.2C21 16.0799 21 15.5198 20.782 15.092 20.5903 14.7157 20.2843 14.4097 19.908 14.218 19.4802 14 18.9201 14 17.8 14L6.2 14C5.0799 14 4.51984 14 4.09202 14.218 3.71569 14.4097 3.40973 14.7157 3.21799 15.092 3 15.5198 3 16.0799 3 17.2L3 17.8C3 18.9201 3 19.4802 3.21799 19.908 3.40973 20.2843 3.71569 20.5903 4.09202 20.782 4.51984 21 5.07989 21 6.2 21H17.8Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRows01)
const Rows01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Rows01'].join(' ')}
    />
  )
})
Rows01.displayName = 'IconRows01'
export default Rows01
