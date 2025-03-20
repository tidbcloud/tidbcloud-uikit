import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUnderline02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 4v6a7 7 0 1 1-14 0V4m3.5 0v6a7 7 0 0 0 5.14 6.75M4 21h16M3 4h7.5M17 4h4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUnderline02)
const Underline02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Underline02'].join(' ')}
    />
  )
})
Underline02.displayName = 'IconUnderline02'
export default Underline02
