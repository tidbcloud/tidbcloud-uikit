import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGoogleChrome = (props, ref) => {
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
      <path
        d="M8.00016 5.33337C6.5274 5.33337 5.3335 6.52728 5.3335 8.00004C5.3335 9.4728 6.5274 10.6667 8.00016 10.6667C9.47292 10.6667 10.6668 9.4728 10.6668 8.00004C10.6668 6.52728 9.47292 5.33337 8.00016 5.33337ZM8.00016 5.33337H14.1135M2.6335 4.04004L5.6935 9.33337M7.2535 14.6267L10.3068 9.33337M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGoogleChrome)
const GoogleChrome = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GoogleChrome', props.className].join(' ')}
    />
  )
})
GoogleChrome.displayName = 'IconGoogleChrome'
export default GoogleChrome
