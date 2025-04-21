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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12.1184 5.33331C15.5158 5.33331 15.5158 10.6666 12.1184 10.6666C8.72175 10.6666 7.36309 5.33331 3.62575 5.33331C0.569085 5.33331 0.569085 10.6666 3.62575 10.6666C7.36309 10.6666 8.72175 5.33331 12.1191 5.33331H12.1184Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
