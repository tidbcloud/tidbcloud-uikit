import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerDownRight = (props, ref) => {
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
        d="M2.6665 2.66663V3.59996C2.6665 5.84017 2.6665 6.96027 3.10248 7.81592C3.48597 8.56857 4.09789 9.18049 4.85054 9.56398C5.70619 9.99996 6.82629 9.99996 9.0665 9.99996H13.3332M13.3332 9.99996L9.99984 6.66663M13.3332 9.99996L9.99984 13.3333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerDownRight)
const CornerDownRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerDownRight', props.className].join(' ')}
    />
  )
})
CornerDownRight.displayName = 'IconCornerDownRight'
export default CornerDownRight
