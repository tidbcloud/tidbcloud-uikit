import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileHeart03 = (props, ref) => {
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
        d="M9.33317 1.51318V4.26688C9.33317 4.64025 9.33317 4.82693 9.40583 4.96954C9.46975 5.09498 9.57173 5.19697 9.69718 5.26088C9.83978 5.33354 10.0265 5.33354 10.3998 5.33354H13.1535M9.33317 1.3335H5.8665C4.7464 1.3335 4.18635 1.3335 3.75852 1.55148C3.3822 1.74323 3.07624 2.04919 2.88449 2.42552C2.6665 2.85334 2.6665 3.41339 2.6665 4.5335V11.4668C2.6665 12.5869 2.6665 13.147 2.88449 13.5748C3.07624 13.9511 3.3822 14.2571 3.75852 14.4488C4.18635 14.6668 4.7464 14.6668 5.8665 14.6668H10.1332C11.2533 14.6668 11.8133 14.6668 12.2412 14.4488C12.6175 14.2571 12.9234 13.9511 13.1152 13.5748C13.3332 13.147 13.3332 12.5869 13.3332 11.4668V5.3335L9.33317 1.3335ZM7.99801 7.88723C7.46485 7.28123 6.57577 7.11822 5.90776 7.67313C5.23974 8.22804 5.1457 9.15582 5.67029 9.81212C6.19488 10.4684 7.99801 12.0002 7.99801 12.0002C7.99801 12.0002 9.80114 10.4684 10.3257 9.81212C10.8503 9.15582 10.7678 8.2222 10.0883 7.67313C9.40877 7.12406 8.53117 7.28123 7.99801 7.88723Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileHeart03)
const FileHeart03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileHeart03', props.className].join(' ')}
    />
  )
})
FileHeart03.displayName = 'IconFileHeart03'
export default FileHeart03
