import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageUserUp = (props, ref) => {
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
        d="M10.6666 3.3335L12.6666 1.3335M12.6666 1.3335L14.6666 3.3335M12.6666 1.3335V5.3335M14.6666 8.00016V11.4668C14.6666 12.5869 14.6666 13.147 14.4486 13.5748C14.2569 13.9511 13.9509 14.2571 13.5746 14.4488C13.1467 14.6668 12.5867 14.6668 11.4666 14.6668H4.53325C3.41315 14.6668 2.85309 14.6668 2.42527 14.4488C2.04895 14.2571 1.74299 13.9511 1.55124 13.5748C1.33325 13.147 1.33325 12.5869 1.33325 11.4668V4.5335C1.33325 3.41339 1.33325 2.85334 1.55124 2.42552C1.74299 2.04919 2.04895 1.74323 2.42527 1.55148C2.85309 1.3335 3.41315 1.3335 4.53325 1.3335H7.99992M1.43026 13.2844C1.74302 12.1592 2.77496 11.3335 3.99976 11.3335H8.66643C9.28597 11.3335 9.59574 11.3335 9.85334 11.3847C10.9112 11.5952 11.7381 12.4221 11.9485 13.4799C11.9998 13.7375 11.9998 14.0473 11.9998 14.6668M9.33325 6.3335C9.33325 7.80626 8.13934 9.00016 6.66659 9.00016C5.19383 9.00016 3.99992 7.80626 3.99992 6.3335C3.99992 4.86074 5.19383 3.66683 6.66659 3.66683C8.13934 3.66683 9.33325 4.86074 9.33325 6.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageUserUp)
const ImageUserUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ImageUserUp', props.className].join(' ')}
    />
  )
})
ImageUserUp.displayName = 'IconImageUserUp'
export default ImageUserUp
