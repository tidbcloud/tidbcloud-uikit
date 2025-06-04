import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLink04 = (props, ref) => {
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
        d="M5.00001 4.66675H4.66668C2.82573 4.66675 1.33334 6.15913 1.33334 8.00008C1.33334 9.84103 2.82573 11.3334 4.66668 11.3334H6.00001C7.84096 11.3334 9.33334 9.84103 9.33334 8.00008M11 11.3334H11.3333C13.1743 11.3334 14.6667 9.84103 14.6667 8.00008C14.6667 6.15913 13.1743 4.66675 11.3333 4.66675H10C8.15906 4.66675 6.66668 6.15913 6.66668 8.00008"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLink04)
const Link04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Link04', props.className].join(' ')}
    />
  )
})
Link04.displayName = 'IconLink04'
export default Link04
