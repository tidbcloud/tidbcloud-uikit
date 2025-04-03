import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageUser = (props, ref) => {
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
        d="M2.66685 14.5451C3.06856 14.6668 3.61116 14.6668 4.5335 14.6668H11.4668C12.3892 14.6668 12.9318 14.6668 13.3335 14.5451M2.66685 14.5451C2.58071 14.519 2.50105 14.4873 2.42552 14.4488C2.04919 14.2571 1.74323 13.9511 1.55148 13.5748C1.3335 13.147 1.3335 12.5869 1.3335 11.4668V4.5335C1.3335 3.41339 1.3335 2.85334 1.55148 2.42552C1.74323 2.04919 2.04919 1.74323 2.42552 1.55148C2.85334 1.3335 3.41339 1.3335 4.5335 1.3335H11.4668C12.5869 1.3335 13.147 1.3335 13.5748 1.55148C13.9511 1.74323 14.2571 2.04919 14.4488 2.42552C14.6668 2.85334 14.6668 3.41339 14.6668 4.5335V11.4668C14.6668 12.5869 14.6668 13.147 14.4488 13.5748C14.2571 13.9511 13.9511 14.2571 13.5748 14.4488C13.4993 14.4873 13.4196 14.519 13.3335 14.5451M2.66685 14.5451C2.66706 14.0056 2.6703 13.7201 2.71807 13.4799C2.92849 12.4221 3.75541 11.5952 4.81326 11.3847C5.07085 11.3335 5.38062 11.3335 6.00016 11.3335H10.0002C10.6197 11.3335 10.9295 11.3335 11.1871 11.3847C12.2449 11.5952 13.0718 12.4221 13.2823 13.4799C13.33 13.7201 13.3333 14.0056 13.3335 14.5451M10.6668 6.3335C10.6668 7.80626 9.47292 9.00016 8.00016 9.00016C6.5274 9.00016 5.3335 7.80626 5.3335 6.3335C5.3335 4.86074 6.5274 3.66683 8.00016 3.66683C9.47292 3.66683 10.6668 4.86074 10.6668 6.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageUser)
const ImageUser = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ImageUser', props.className].join(' ')}
    />
  )
})
ImageUser.displayName = 'IconImageUser'
export default ImageUser
