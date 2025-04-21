import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMove = (props, ref) => {
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
        d="M3.33325 6.00016L1.33325 8.00016M1.33325 8.00016L3.33325 10.0002M1.33325 8.00016H14.6666M5.99992 3.3335L7.99992 1.3335M7.99992 1.3335L9.99992 3.3335M7.99992 1.3335V14.6668M9.99992 12.6668L7.99992 14.6668M7.99992 14.6668L5.99992 12.6668M12.6666 6.00016L14.6666 8.00016M14.6666 8.00016L12.6666 10.0002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMove)
const Move = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Move', props.className].join(' ')}
    />
  )
})
Move.displayName = 'IconMove'
export default Move
