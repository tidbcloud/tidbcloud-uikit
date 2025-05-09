import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTv03 = (props, ref) => {
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
        d="M11.3333 2L7.99992 4.66667L4.66659 2M4.53325 14H11.4666C12.5867 14 13.1467 14 13.5746 13.782C13.9509 13.5903 14.2569 13.2843 14.4486 12.908C14.6666 12.4802 14.6666 11.9201 14.6666 10.8V7.86667C14.6666 6.74656 14.6666 6.18651 14.4486 5.75869C14.2569 5.38236 13.9509 5.0764 13.5746 4.88465C13.1467 4.66667 12.5867 4.66667 11.4666 4.66667H4.53325C3.41315 4.66667 2.85309 4.66667 2.42527 4.88465C2.04895 5.0764 1.74299 5.38236 1.55124 5.75869C1.33325 6.18651 1.33325 6.74656 1.33325 7.86667V10.8C1.33325 11.9201 1.33325 12.4802 1.55124 12.908C1.74299 13.2843 2.04895 13.5903 2.42527 13.782C2.85309 14 3.41315 14 4.53325 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTv03)
const Tv03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Tv03', props.className].join(' ')}
    />
  )
})
Tv03.displayName = 'IconTv03'
export default Tv03
