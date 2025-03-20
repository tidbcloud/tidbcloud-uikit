import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignRight02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 10c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 8.398 21 7.932 21 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 4 18.932 4 18 4h-8c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 5.602 7 6.068 7 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 10 9.068 10 10 10zM18 20c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignRight02)
const AlignRight02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlignRight02'].join(' ')}
    />
  )
})
AlignRight02.displayName = 'IconAlignRight02'
export default AlignRight02
