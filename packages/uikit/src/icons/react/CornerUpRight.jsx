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
      ref={ref}
      {...props}
    >
      <path
        d="M2.6665 13.3333V12.4C2.6665 10.1597 2.6665 9.03964 3.10248 8.184C3.48597 7.43135 4.09789 6.81943 4.85054 6.43593C5.70619 5.99996 6.82629 5.99996 9.0665 5.99996H13.3332M13.3332 5.99996L9.99984 9.33329M13.3332 5.99996L9.99984 2.66663"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
