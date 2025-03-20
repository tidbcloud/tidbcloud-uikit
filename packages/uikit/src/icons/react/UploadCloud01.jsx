import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUploadCloud01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 18"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.333 12.535a3.75 3.75 0 0 1 1.733-6.852 5.001 5.001 0 0 1 9.868 0 3.75 3.75 0 0 1 1.733 6.852m-10-.202L10 9m0 0 3.333 3.333M10 9v7.5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUploadCloud01)
const UploadCloud01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'UploadCloud01'].join(' ')}
    />
  )
})
UploadCloud01.displayName = 'IconUploadCloud01'
export default UploadCloud01
