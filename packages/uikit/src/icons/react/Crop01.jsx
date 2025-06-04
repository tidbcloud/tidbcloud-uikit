import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCrop01 = (props, ref) => {
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
        d="M1.33325 4.00016H9.86659C10.6133 4.00016 10.9867 4.00016 11.2719 4.14549C11.5228 4.27332 11.7268 4.47729 11.8546 4.72817C11.9999 5.01339 11.9999 5.38676 11.9999 6.1335V14.6668M14.6666 12.0002L6.13325 12.0002C5.38652 12.0002 5.01315 12.0002 4.72793 11.8548C4.47705 11.727 4.27307 11.523 4.14524 11.2722C3.99992 10.9869 3.99992 10.6136 3.99992 9.86683V1.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCrop01)
const Crop01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Crop01', props.className].join(' ')}
    />
  )
})
Crop01.displayName = 'IconCrop01'
export default Crop01
