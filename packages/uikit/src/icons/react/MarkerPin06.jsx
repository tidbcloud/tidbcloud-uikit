import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin06 = (props, ref) => {
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
        d="M10.6666 8.91629C13.0212 9.37923 14.6666 10.4365 14.6666 11.6667C14.6666 13.3235 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 13.3235 1.33331 11.6667C1.33331 10.4365 2.97877 9.37923 5.33331 8.91629M7.99998 11.3333V6M7.99998 6C9.10455 6 9.99998 5.10457 9.99998 4C9.99998 2.89543 9.10455 2 7.99998 2C6.89541 2 5.99998 2.89543 5.99998 4C5.99998 5.10457 6.89541 6 7.99998 6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin06)
const MarkerPin06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin06', props.className].join(' ')}
    />
  )
})
MarkerPin06.displayName = 'IconMarkerPin06'
export default MarkerPin06
