import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget03 = (props, ref) => {
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
        d="M14.6666 7.99998H12M3.99998 7.99998H1.33331M7.99998 3.99998V1.33331M7.99998 14.6666V12M13.3333 7.99998C13.3333 10.9455 10.9455 13.3333 7.99998 13.3333C5.05446 13.3333 2.66665 10.9455 2.66665 7.99998C2.66665 5.05446 5.05446 2.66665 7.99998 2.66665C10.9455 2.66665 13.3333 5.05446 13.3333 7.99998ZM9.99998 7.99998C9.99998 9.10455 9.10455 9.99998 7.99998 9.99998C6.89541 9.99998 5.99998 9.10455 5.99998 7.99998C5.99998 6.89541 6.89541 5.99998 7.99998 5.99998C9.10455 5.99998 9.99998 6.89541 9.99998 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget03)
const Target03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target03', props.className].join(' ')}
    />
  )
})
Target03.displayName = 'IconTarget03'
export default Target03
