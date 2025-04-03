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
      ref={ref}
      {...props}
    >
      <path
        d="M5.99984 9.33329L2.6665 5.99996M2.6665 5.99996L5.99984 2.66663M2.6665 5.99996H6.93317C9.17338 5.99996 10.2935 5.99996 11.1491 6.43593C11.9018 6.81943 12.5137 7.43135 12.8972 8.184C13.3332 9.03964 13.3332 10.1597 13.3332 12.4V13.3333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
