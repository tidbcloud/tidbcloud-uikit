import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconEdit01 = (props, ref) => {
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
        d="M1.9172 12.0771C1.94783 11.8014 1.96314 11.6636 2.00485 11.5347C2.04185 11.4205 2.09413 11.3117 2.16026 11.2114C2.23481 11.0983 2.33287 11.0003 2.52899 10.8042L11.3332 1.99998C12.0696 1.2636 13.2635 1.2636 13.9999 1.99998C14.7362 2.73636 14.7362 3.93027 13.9999 4.66665L5.19565 13.4708C4.99953 13.6669 4.90147 13.765 4.78843 13.8396C4.68814 13.9057 4.57936 13.958 4.46507 13.995C4.33624 14.0367 4.19841 14.052 3.92275 14.0826L1.6665 14.3333L1.9172 12.0771Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconEdit01)
const Edit01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Edit01', props.className].join(' ')}
    />
  )
})
Edit01.displayName = 'IconEdit01'
export default Edit01
