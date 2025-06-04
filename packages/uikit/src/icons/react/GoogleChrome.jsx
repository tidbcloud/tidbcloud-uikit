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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00001 5.33331C6.52725 5.33331 5.33334 6.52722 5.33334 7.99998C5.33334 9.47274 6.52725 10.6666 8.00001 10.6666C9.47277 10.6666 10.6667 9.47274 10.6667 7.99998C10.6667 6.52722 9.47277 5.33331 8.00001 5.33331ZM8.00001 5.33331H14.1133M2.63334 4.03998L5.69334 9.33331M7.25334 14.6266L10.3067 9.33331M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
