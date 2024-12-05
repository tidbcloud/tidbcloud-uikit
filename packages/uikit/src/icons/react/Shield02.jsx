import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShield02 = (props, ref) => {
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
        d="M11.302 21.615c.221.13.332.194.488.227.122.026.298.026.42 0 .156-.033.267-.098.488-.227C14.646 20.479 20 16.909 20 12V8.2c0-1.074 0-1.61-.166-1.992a1.75 1.75 0 0 0-.68-.837c-.34-.24-1.005-.378-2.336-.655-1.467-.305-2.594-.856-3.624-1.653-.494-.382-.74-.573-.934-.625a.84.84 0 0 0-.52 0c-.194.052-.44.243-.934.625-1.03.797-2.157 1.348-3.624 1.653-1.33.277-1.996.415-2.336.655-.345.244-.512.45-.68.837C4 6.59 4 7.126 4 8.2V12c0 4.909 5.354 8.479 7.302 9.615"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShield02)
const Shield02 = forwardRef((props, ref) => {
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
Shield02.displayName = 'IconShield02'
export default Shield02
