import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase01 = (props, ref) => {
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
        d="M14 3.3335C14 4.43807 11.3137 5.3335 8 5.3335C4.68629 5.3335 2 4.43807 2 3.3335M14 3.3335C14 2.22893 11.3137 1.3335 8 1.3335C4.68629 1.3335 2 2.22893 2 3.3335M14 3.3335V12.6668C14 13.7735 11.3333 14.6668 8 14.6668C4.66667 14.6668 2 13.7735 2 12.6668V3.3335M14 8.00016C14 9.10683 11.3333 10.0002 8 10.0002C4.66667 10.0002 2 9.10683 2 8.00016"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase01)
const Database01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database01', props.className].join(' ')}
    />
  )
})
Database01.displayName = 'IconDatabase01'
export default Database01
