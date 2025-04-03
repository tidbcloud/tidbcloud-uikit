import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconEdit = (props, ref) => {
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
        d="M11.9999 6.66665L9.33319 3.99998M1.6665 14.3333L3.92275 14.0826C4.19841 14.052 4.33624 14.0367 4.46507 13.995C4.57936 13.958 4.68814 13.9057 4.78843 13.8396C4.90147 13.765 4.99953 13.6669 5.19565 13.4708L13.9999 4.66665C14.7362 3.93027 14.7362 2.73636 13.9999 1.99998C13.2635 1.2636 12.0696 1.2636 11.3332 1.99998L2.52899 10.8042C2.33287 11.0003 2.23481 11.0983 2.16026 11.2114C2.09413 11.3117 2.04185 11.4205 2.00485 11.5347C1.96314 11.6636 1.94783 11.8014 1.9172 12.0771L1.6665 14.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconEdit)
const Edit = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Edit', props.className].join(' ')}
    />
  )
})
Edit.displayName = 'IconEdit'
export default Edit
