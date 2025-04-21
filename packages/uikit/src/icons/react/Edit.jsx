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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12 6.66668L9.33334 4.00001M1.66666 14.3333L3.9229 14.0826C4.19856 14.052 4.33639 14.0367 4.46522 13.995C4.57952 13.958 4.68829 13.9057 4.78858 13.8396C4.90163 13.765 4.99969 13.667 5.19581 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52914 10.8042C2.33302 11.0003 2.23496 11.0984 2.16041 11.2114C2.09428 11.3117 2.042 11.4205 2.005 11.5348C1.96329 11.6636 1.94798 11.8014 1.91735 12.0771L1.66666 14.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
