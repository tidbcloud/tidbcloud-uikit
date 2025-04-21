import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget01 = (props, ref) => {
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
        d="M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666M14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99998 1.33331M14.6666 7.99998H12M7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998M7.99998 14.6666V12M1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331M1.33331 7.99998H3.99998M7.99998 1.33331V3.99998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget01)
const Target01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target01', props.className].join(' ')}
    />
  )
})
Target01.displayName = 'IconTarget01'
export default Target01
