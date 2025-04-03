import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerDownLeft = (props, ref) => {
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
        d="M13.3332 2.66663V3.59996C13.3332 5.84017 13.3332 6.96027 12.8972 7.81592C12.5137 8.56857 11.9018 9.18049 11.1491 9.56398C10.2935 9.99996 9.17338 9.99996 6.93317 9.99996H2.6665M2.6665 9.99996L5.99984 6.66663M2.6665 9.99996L5.99984 13.3333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerDownLeft)
const CornerDownLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerDownLeft', props.className].join(' ')}
    />
  )
})
CornerDownLeft.displayName = 'IconCornerDownLeft'
export default CornerDownLeft
