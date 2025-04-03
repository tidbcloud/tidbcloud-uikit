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
      ref={ref}
      {...props}
    >
      <path
        d="M2.6665 8.66667H13.0579C13.3662 8.66667 13.5203 8.66667 13.6084 8.60201C13.6852 8.54564 13.7342 8.45911 13.743 8.36427C13.7531 8.25551 13.6738 8.1233 13.5152 7.85894L12.1645 5.60773C12.1046 5.50796 12.0747 5.45808 12.063 5.40483C12.0526 5.35773 12.0526 5.30894 12.063 5.26184C12.0747 5.20859 12.1046 5.1587 12.1645 5.05894L13.5152 2.80773C13.6738 2.54335 13.7531 2.41116 13.743 2.3024C13.7342 2.20756 13.6852 2.12103 13.6084 2.06465C13.5203 2 13.3662 2 13.0579 2H2.6665L2.6665 14"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
