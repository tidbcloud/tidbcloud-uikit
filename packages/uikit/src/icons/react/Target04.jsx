import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget04 = (props, ref) => {
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
        d="M10.6666 5.33331V3.33331L12.6666 1.33331L13.3333 2.66665L14.6666 3.33331L12.6666 5.33331H10.6666ZM10.6666 5.33331L7.99996 7.99994M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331M11.3333 7.99998C11.3333 9.84093 9.84093 11.3333 7.99998 11.3333C6.15903 11.3333 4.66665 9.84093 4.66665 7.99998C4.66665 6.15903 6.15903 4.66665 7.99998 4.66665"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget04)
const Target04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target04', props.className].join(' ')}
    />
  )
})
Target04.displayName = 'IconTarget04'
export default Target04
