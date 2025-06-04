import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReflect02 = (props, ref) => {
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
        d="M7.99992 2V4M7.99992 7V9M7.99992 12V14M14.6666 8H10.3333M10.3333 8L12.9999 10.6667M10.3333 8L12.9999 5.33333M1.33325 8H5.66659M5.66659 8L2.99992 10.6667M5.66659 8L2.99992 5.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReflect02)
const Reflect02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Reflect02', props.className].join(' ')}
    />
  )
})
Reflect02.displayName = 'IconReflect02'
export default Reflect02
