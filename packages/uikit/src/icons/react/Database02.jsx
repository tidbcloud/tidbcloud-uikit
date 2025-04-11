import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase02 = (props, ref) => {
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
        d="M14 3.3335C14 4.43807 11.3137 5.3335 8 5.3335C4.68629 5.3335 2 4.43807 2 3.3335M14 3.3335C14 2.22893 11.3137 1.3335 8 1.3335C4.68629 1.3335 2 2.22893 2 3.3335M14 3.3335V12.6668C14 13.7735 11.3333 14.6668 8 14.6668C4.66667 14.6668 2 13.7735 2 12.6668V3.3335M14 6.48031C14 7.58697 11.3333 8.48031 8 8.48031C4.66667 8.48031 2 7.58697 2 6.48031M14 9.62683C14 10.7335 11.3333 11.6268 8 11.6268C4.66667 11.6268 2 10.7335 2 9.62683"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase02)
const Database02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database02', props.className].join(' ')}
    />
  )
})
Database02.displayName = 'IconDatabase02'
export default Database02
