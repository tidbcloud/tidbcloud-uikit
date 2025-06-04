import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDivide02 = (props, ref) => {
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
        d="M2.66666 7.99996H13.3333M9.33333 3.99996C9.33333 4.73634 8.73638 5.33329 8 5.33329C7.26362 5.33329 6.66666 4.73634 6.66666 3.99996C6.66666 3.26358 7.26362 2.66663 8 2.66663C8.73638 2.66663 9.33333 3.26358 9.33333 3.99996ZM9.33333 12C9.33333 12.7363 8.73638 13.3333 8 13.3333C7.26362 13.3333 6.66666 12.7363 6.66666 12C6.66666 11.2636 7.26362 10.6666 8 10.6666C8.73638 10.6666 9.33333 11.2636 9.33333 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDivide02)
const Divide02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Divide02', props.className].join(' ')}
    />
  )
})
Divide02.displayName = 'IconDivide02'
export default Divide02
