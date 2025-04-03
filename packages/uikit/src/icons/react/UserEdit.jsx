import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserEdit = (props, ref) => {
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
        d="M6.00016 10.3333H5.00017C4.06979 10.3333 3.6046 10.3333 3.22607 10.4482C2.3738 10.7067 1.70686 11.3736 1.44832 12.2259C1.3335 12.6044 1.3335 13.0696 1.3335 14M9.66683 5C9.66683 6.65685 8.32368 8 6.66683 8C5.00998 8 3.66683 6.65685 3.66683 5C3.66683 3.34315 5.00998 2 6.66683 2C8.32368 2 9.66683 3.34315 9.66683 5ZM7.3335 14L9.40107 13.4093C9.50008 13.381 9.54958 13.3668 9.59575 13.3456C9.63675 13.3268 9.67573 13.3039 9.7121 13.2772C9.75306 13.2471 9.78946 13.2107 9.86227 13.1379L14.1669 8.83336C14.6271 8.37311 14.6271 7.62689 14.1669 7.16665C13.7066 6.70642 12.9604 6.70642 12.5002 7.16666L8.19561 11.4712C8.1228 11.544 8.08639 11.5804 8.05632 11.6214C8.02962 11.6578 8.00669 11.6967 7.98786 11.7377C7.96666 11.7839 7.95252 11.8334 7.92423 11.9324L7.3335 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserEdit)
const UserEdit = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserEdit', props.className].join(' ')}
    />
  )
})
UserEdit.displayName = 'IconUserEdit'
export default UserEdit
