import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserDown02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M10.6667 4.66663L12.6667 6.66663M12.6667 6.66663L14.6667 4.66663M12.6667 6.66663V2.66663M10.6667 14V13.2C10.6667 12.0799 10.6667 11.5198 10.4487 11.092C10.257 10.7157 9.95101 10.4097 9.57469 10.2179C9.14687 9.99996 8.58681 9.99996 7.46671 9.99996H4.53337C3.41327 9.99996 2.85322 9.99996 2.42539 10.2179C2.04907 10.4097 1.74311 10.7157 1.55136 11.092C1.33337 11.5198 1.33337 12.0799 1.33337 13.2V14M8.33337 4.99996C8.33337 6.28862 7.28871 7.33329 6.00004 7.33329C4.71138 7.33329 3.66671 6.28862 3.66671 4.99996C3.66671 3.71129 4.71138 2.66663 6.00004 2.66663C7.28871 2.66663 8.33337 3.71129 8.33337 4.99996Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserDown02)
const UserDown02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserDown02', props.className].join(' ')}
    />
  )
})
UserDown02.displayName = 'IconUserDown02'
export default UserDown02
