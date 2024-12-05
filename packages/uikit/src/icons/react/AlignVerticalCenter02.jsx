import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignVerticalCenter02 = (props, ref) => {
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
        d="M10 18V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 4.602 4 5.068 4 6v12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 21 6.068 21 7 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.398 10 18.932 10 18M20 16V8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 5 17.932 5 17 5s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C14 6.602 14 7.068 14 8v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 19 16.068 19 17 19s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 17.398 20 16.932 20 16"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignVerticalCenter02)
const AlignVerticalCenter02 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
AlignVerticalCenter02.displayName = 'IconAlignVerticalCenter02'
export default AlignVerticalCenter02
