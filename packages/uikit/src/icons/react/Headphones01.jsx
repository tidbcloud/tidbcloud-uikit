import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeadphones01 = (props, ref) => {
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
        d="M14 12V8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8V12M3.66667 14C2.74619 14 2 13.2538 2 12.3333V11C2 10.0795 2.74619 9.33333 3.66667 9.33333C4.58714 9.33333 5.33333 10.0795 5.33333 11V12.3333C5.33333 13.2538 4.58714 14 3.66667 14ZM12.3333 14C11.4129 14 10.6667 13.2538 10.6667 12.3333V11C10.6667 10.0795 11.4129 9.33333 12.3333 9.33333C13.2538 9.33333 14 10.0795 14 11V12.3333C14 13.2538 13.2538 14 12.3333 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeadphones01)
const Headphones01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Headphones01', props.className].join(' ')}
    />
  )
})
Headphones01.displayName = 'IconHeadphones01'
export default Headphones01
