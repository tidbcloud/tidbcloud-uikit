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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M1.91735 12.0771C1.94798 11.8014 1.96329 11.6636 2.005 11.5348C2.042 11.4205 2.09428 11.3117 2.16041 11.2114C2.23496 11.0984 2.33302 11.0003 2.52914 10.8042L11.3333 2.00001C12.0697 1.26363 13.2636 1.26363 14 2.00001C14.7364 2.73639 14.7364 3.9303 14 4.66668L5.19581 13.4709C4.99969 13.667 4.90163 13.765 4.78858 13.8396C4.68829 13.9057 4.57952 13.958 4.46522 13.995C4.33639 14.0367 4.19856 14.052 3.9229 14.0826L1.66666 14.3333L1.91735 12.0771Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
