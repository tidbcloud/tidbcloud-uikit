import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInfinity = (props, ref) => {
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
        d="M12.1187 5.33331C15.516 5.33331 15.516 10.6666 12.1187 10.6666C8.722 10.6666 7.36333 5.33331 3.626 5.33331C0.569329 5.33331 0.569329 10.6666 3.626 10.6666C7.36333 10.6666 8.722 5.33331 12.1193 5.33331H12.1187Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInfinity)
const Infinity = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Infinity', props.className].join(' ')}
    />
  )
})
Infinity.displayName = 'IconInfinity'
export default Infinity
