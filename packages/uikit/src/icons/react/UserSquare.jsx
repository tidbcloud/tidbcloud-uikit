import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserSquare = (props, ref) => {
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
        d="M2.66685 14.5449C3.06856 14.6666 3.61116 14.6666 4.5335 14.6666H11.4668C12.3892 14.6666 12.9318 14.6666 13.3335 14.5449M2.66685 14.5449C2.58071 14.5188 2.50105 14.4871 2.42552 14.4486C2.04919 14.2569 1.74323 13.9509 1.55148 13.5746C1.3335 13.1467 1.3335 12.5867 1.3335 11.4666V4.53325C1.3335 3.41315 1.3335 2.85309 1.55148 2.42527C1.74323 2.04895 2.04919 1.74299 2.42552 1.55124C2.85334 1.33325 3.41339 1.33325 4.5335 1.33325H11.4668C12.5869 1.33325 13.147 1.33325 13.5748 1.55124C13.9511 1.74299 14.2571 2.04895 14.4488 2.42527C14.6668 2.85309 14.6668 3.41315 14.6668 4.53325V11.4666C14.6668 12.5867 14.6668 13.1467 14.4488 13.5746C14.2571 13.9509 13.9511 14.2569 13.5748 14.4486C13.4993 14.4871 13.4196 14.5188 13.3335 14.5449M2.66685 14.5449C2.66706 14.0053 2.6703 13.7198 2.71807 13.4797C2.92849 12.4218 3.75541 11.5949 4.81326 11.3845C5.07085 11.3333 5.38062 11.3333 6.00016 11.3333H10.0002C10.6197 11.3333 10.9295 11.3333 11.1871 11.3845C12.2449 11.5949 13.0718 12.4218 13.2823 13.4797C13.33 13.7198 13.3333 14.0053 13.3335 14.5449M10.6668 6.33325C10.6668 7.80601 9.47292 8.99992 8.00016 8.99992C6.5274 8.99992 5.3335 7.80601 5.3335 6.33325C5.3335 4.86049 6.5274 3.66659 8.00016 3.66659C9.47292 3.66659 10.6668 4.86049 10.6668 6.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserSquare)
const UserSquare = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserSquare', props.className].join(' ')}
    />
  )
})
UserSquare.displayName = 'IconUserSquare'
export default UserSquare
