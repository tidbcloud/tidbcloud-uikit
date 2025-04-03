import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDivide02 = (props, ref) => {
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
        d="M2.6665 8.00008H13.3332M9.33317 4.00008C9.33317 4.73646 8.73622 5.33341 7.99984 5.33341C7.26346 5.33341 6.6665 4.73646 6.6665 4.00008C6.6665 3.2637 7.26346 2.66675 7.99984 2.66675C8.73622 2.66675 9.33317 3.2637 9.33317 4.00008ZM9.33317 12.0001C9.33317 12.7365 8.73622 13.3334 7.99984 13.3334C7.26346 13.3334 6.6665 12.7365 6.6665 12.0001C6.6665 11.2637 7.26346 10.6667 7.99984 10.6667C8.73622 10.6667 9.33317 11.2637 9.33317 12.0001Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDivide02)
const Divide02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Divide02', props.className].join(' ')}
    />
  )
})
Divide02.displayName = 'IconDivide02'
export default Divide02
