import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignTopArrow02 = (props, ref) => {
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
        d="M10 18V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 4.602 4 5.068 4 6v12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 21 6.068 21 7 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.398 10 18.932 10 18M20 14V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 3 17.932 3 17 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C14 4.602 14 5.068 14 6v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 17 16.068 17 17 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignTopArrow02)
const AlignTopArrow02 = forwardRef((props, ref) => {
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
AlignTopArrow02.displayName = 'IconAlignTopArrow02'
export default AlignTopArrow02
