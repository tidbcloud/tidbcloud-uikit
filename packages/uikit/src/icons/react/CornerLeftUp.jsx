import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerLeftUp = (props, ref) => {
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
        d="M14 13.3334H11.7333C9.49312 13.3334 8.37302 13.3334 7.51737 12.8974C6.76472 12.5139 6.1528 11.902 5.76931 11.1493C5.33333 10.2937 5.33333 9.17356 5.33333 6.93335V2.66669M5.33333 2.66669L8.66667 6.00002M5.33333 2.66669L2 6.00002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerLeftUp)
const CornerLeftUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerLeftUp', props.className].join(' ')}
    />
  )
})
CornerLeftUp.displayName = 'IconCornerLeftUp'
export default CornerLeftUp
