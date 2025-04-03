import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase03 = (props, ref) => {
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
        d="M9.33333 13.3335C9.33333 14.0699 8.73638 14.6668 8 14.6668C7.26362 14.6668 6.66667 14.0699 6.66667 13.3335M9.33333 13.3335C9.33333 12.5971 8.73638 12.0002 8 12.0002M9.33333 13.3335H14M6.66667 13.3335C6.66667 12.5971 7.26362 12.0002 8 12.0002M6.66667 13.3335H2M8 12.0002V9.3335M14 3.3335C14 4.43807 11.3137 5.3335 8 5.3335C4.68629 5.3335 2 4.43807 2 3.3335M14 3.3335C14 2.22893 11.3137 1.3335 8 1.3335C4.68629 1.3335 2 2.22893 2 3.3335M14 3.3335V7.3335C14 8.44016 11.3333 9.3335 8 9.3335M2 3.3335V7.3335C2 8.44016 4.66667 9.3335 8 9.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase03)
const Database03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database03', props.className].join(' ')}
    />
  )
})
Database03.displayName = 'IconDatabase03'
export default Database03
