import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer02 = (props, ref) => {
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
        d="M3.99998 5.33341H4.00665M3.99998 10.6667H4.00665M3.99998 8.00008H12M3.99998 8.00008C2.52722 8.00008 1.33331 6.80617 1.33331 5.33341C1.33331 3.86066 2.52722 2.66675 3.99998 2.66675H12C13.4727 2.66675 14.6666 3.86066 14.6666 5.33341C14.6666 6.80617 13.4727 8.00008 12 8.00008M3.99998 8.00008C2.52722 8.00008 1.33331 9.19399 1.33331 10.6667C1.33331 12.1395 2.52722 13.3334 3.99998 13.3334H12C13.4727 13.3334 14.6666 12.1395 14.6666 10.6667C14.6666 9.19399 13.4727 8.00008 12 8.00008"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer02)
const Server02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Server02', props.className].join(' ')}
    />
  )
})
Server02.displayName = 'IconServer02'
export default Server02
