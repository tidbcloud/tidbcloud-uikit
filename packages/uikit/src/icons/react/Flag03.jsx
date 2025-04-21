import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag03 = (props, ref) => {
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
        d="M2.66666 8.66667H13.058C13.3663 8.66667 13.5205 8.66667 13.6086 8.60201C13.6853 8.54564 13.7343 8.45911 13.7432 8.36427C13.7533 8.25551 13.674 8.1233 13.5154 7.85894L12.1646 5.60773C12.1048 5.50796 12.0748 5.45808 12.0632 5.40483C12.0528 5.35773 12.0528 5.30894 12.0632 5.26184C12.0748 5.20859 12.1048 5.1587 12.1646 5.05894L13.5154 2.80773C13.674 2.54335 13.7533 2.41116 13.7432 2.3024C13.7343 2.20756 13.6853 2.12103 13.6086 2.06465C13.5205 2 13.3663 2 13.058 2H2.66666L2.66666 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag03)
const Flag03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag03', props.className].join(' ')}
    />
  )
})
Flag03.displayName = 'IconFlag03'
export default Flag03
