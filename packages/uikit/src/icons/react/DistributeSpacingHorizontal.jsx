import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDistributeSpacingHorizontal = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21V3M3 21V3m6 5v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 19 11.068 19 12 19s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 17.398 15 16.932 15 16V8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C13.398 5 12.932 5 12 5s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C9 6.602 9 7.068 9 8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDistributeSpacingHorizontal)
const DistributeSpacingHorizontal = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DistributeSpacingHorizontal'].join(' ')}
    />
  )
})
DistributeSpacingHorizontal.displayName = 'IconDistributeSpacingHorizontal'
export default DistributeSpacingHorizontal
