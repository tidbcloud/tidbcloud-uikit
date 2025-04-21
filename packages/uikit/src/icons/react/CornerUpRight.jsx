import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerUpRight = (props, ref) => {
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
        d="M2.66663 13.3333V12.4C2.66663 10.1597 2.66663 9.03964 3.1026 8.184C3.48609 7.43135 4.09802 6.81943 4.85066 6.43593C5.70631 5.99996 6.82642 5.99996 9.06663 5.99996H13.3333M13.3333 5.99996L9.99996 9.33329M13.3333 5.99996L9.99996 2.66663"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerUpRight)
const CornerUpRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerUpRight', props.className].join(' ')}
    />
  )
})
CornerUpRight.displayName = 'IconCornerUpRight'
export default CornerUpRight
