import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconColors1 = (props, ref) => {
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
        d="M7.99991 13.6483C8.70759 14.2817 9.64211 14.6668 10.6666 14.6668C12.8757 14.6668 14.6666 12.876 14.6666 10.6668C14.6666 8.82221 13.418 7.26922 11.7198 6.80695M4.28004 6.80694C2.58188 7.26921 1.33325 8.82221 1.33325 10.6668C1.33325 12.876 3.12411 14.6668 5.33325 14.6668C7.54239 14.6668 9.33325 12.876 9.33325 10.6668C9.33325 10.1465 9.2339 9.64937 9.05313 9.19339M11.9999 5.3335C11.9999 7.54264 10.2091 9.3335 7.99992 9.3335C5.79078 9.3335 3.99992 7.54264 3.99992 5.3335C3.99992 3.12436 5.79078 1.3335 7.99992 1.3335C10.2091 1.3335 11.9999 3.12436 11.9999 5.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconColors1)
const Colors1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Colors1', props.className].join(' ')}
    />
  )
})
Colors1.displayName = 'IconColors1'
export default Colors1
