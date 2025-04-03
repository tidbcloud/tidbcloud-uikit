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
      ref={ref}
      {...props}
    >
      <path
        d="M3.3335 6.00016L1.3335 8.00016M1.3335 8.00016L3.3335 10.0002M1.3335 8.00016H14.6668M6.00016 3.3335L8.00016 1.3335M8.00016 1.3335L10.0002 3.3335M8.00016 1.3335V14.6668M10.0002 12.6668L8.00016 14.6668M8.00016 14.6668L6.00016 12.6668M12.6668 6.00016L14.6668 8.00016M14.6668 8.00016L12.6668 10.0002"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
