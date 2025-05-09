import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAutoMode = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M10.6282 13.3953C9.8345 13.7826 8.94264 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C8.94264 2 9.8345 2.21738 10.6282 2.60473C11.6 3.07901 12.4528 3.94024 12.8011 4.40013C14.4 6.52703 14.3996 9.47468 12.8 11.6012C12.4522 12.0607 11.5308 13.0627 10.6282 13.3953Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2V14Z" fill="#383E40" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAutoMode)
const AutoMode = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AutoMode', props.className].join(' ')}
    />
  )
})
AutoMode.displayName = 'IconAutoMode'
export default AutoMode
