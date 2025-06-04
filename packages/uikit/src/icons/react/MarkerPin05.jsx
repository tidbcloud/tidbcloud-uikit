import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin05 = (props, ref) => {
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
        d="M10.6666 8.91629C13.0212 9.37923 14.6666 10.4365 14.6666 11.6667C14.6666 13.3235 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 13.3235 1.33331 11.6667C1.33331 10.4365 2.97877 9.37923 5.33331 8.91629M7.99998 11.3333V2L11.5451 4.18163C11.8037 4.34076 11.933 4.42033 11.9743 4.52057C12.0102 4.608 12.0074 4.7066 11.9664 4.79181C11.9195 4.8895 11.7858 4.96148 11.5185 5.10543L7.99998 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin05)
const MarkerPin05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin05', props.className].join(' ')}
    />
  )
})
MarkerPin05.displayName = 'IconMarkerPin05'
export default MarkerPin05
