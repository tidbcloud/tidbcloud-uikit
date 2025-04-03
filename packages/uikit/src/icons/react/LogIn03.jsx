import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogIn03 = (props, ref) => {
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
        d="M4 11.3334C4 11.5676 4 11.6847 4.01045 11.7865C4.09716 12.6317 4.7084 13.3298 5.53471 13.5275C5.63423 13.5513 5.75034 13.5668 5.98246 13.5977L10.3771 14.1837C11.628 14.3505 12.2535 14.4339 12.739 14.2408C13.1652 14.0714 13.5202 13.7605 13.7445 13.3605C14 12.9048 14 12.2738 14 11.0117V4.98838C14 3.72635 14 3.09533 13.7445 2.63965C13.5202 2.23957 13.1652 1.92875 12.739 1.75928C12.2535 1.56625 11.628 1.64965 10.3771 1.81645L5.98246 2.40239C5.75031 2.43335 5.63423 2.44882 5.53471 2.47263C4.7084 2.67029 4.09716 3.36844 4.01044 4.21362C4 4.31542 4 4.43252 4 4.66672M8 5.33339L10.6667 8.00006M10.6667 8.00006L8 10.6667M10.6667 8.00006H2"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogIn03)
const LogIn03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogIn03', props.className].join(' ')}
    />
  )
})
LogIn03.displayName = 'IconLogIn03'
export default LogIn03
