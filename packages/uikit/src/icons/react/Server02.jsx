import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer02 = (props, ref) => {
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
        d="M4.00016 5.33317H4.00683M4.00016 10.6665H4.00683M4.00016 7.99984H12.0002M4.00016 7.99984C2.5274 7.99984 1.3335 6.80593 1.3335 5.33317C1.3335 3.86041 2.5274 2.6665 4.00016 2.6665H12.0002C13.4729 2.6665 14.6668 3.86041 14.6668 5.33317C14.6668 6.80593 13.4729 7.99984 12.0002 7.99984M4.00016 7.99984C2.5274 7.99984 1.3335 9.19374 1.3335 10.6665C1.3335 12.1393 2.5274 13.3332 4.00016 13.3332H12.0002C13.4729 13.3332 14.6668 12.1393 14.6668 10.6665C14.6668 9.19374 13.4729 7.99984 12.0002 7.99984"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer02)
const Server02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Server02', props.className].join(' ')}
    />
  )
})
Server02.displayName = 'IconServer02'
export default Server02
