import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerUpLeft = (props, ref) => {
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
        d="M5.99996 9.33329L2.66663 5.99996M2.66663 5.99996L5.99996 2.66663M2.66663 5.99996H6.93329C9.1735 5.99996 10.2936 5.99996 11.1493 6.43593C11.9019 6.81943 12.5138 7.43135 12.8973 8.184C13.3333 9.03964 13.3333 10.1597 13.3333 12.4V13.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerUpLeft)
const CornerUpLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerUpLeft', props.className].join(' ')}
    />
  )
})
CornerUpLeft.displayName = 'IconCornerUpLeft'
export default CornerUpLeft
