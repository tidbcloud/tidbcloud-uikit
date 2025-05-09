import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFaceNeutral = (props, ref) => {
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
        d="M5.33337 10H10.6667M10 6.00004H10.0067M6.00004 6.00004H6.00671M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004ZM10.3334 6.00004C10.3334 6.18414 10.1841 6.33337 10 6.33337C9.81595 6.33337 9.66671 6.18414 9.66671 6.00004C9.66671 5.81595 9.81595 5.66671 10 5.66671C10.1841 5.66671 10.3334 5.81595 10.3334 6.00004ZM6.33337 6.00004C6.33337 6.18414 6.18414 6.33337 6.00004 6.33337C5.81595 6.33337 5.66671 6.18414 5.66671 6.00004C5.66671 5.81595 5.81595 5.66671 6.00004 5.66671C6.18414 5.66671 6.33337 5.81595 6.33337 6.00004Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFaceNeutral)
const FaceNeutral = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FaceNeutral', props.className].join(' ')}
    />
  )
})
FaceNeutral.displayName = 'IconFaceNeutral'
export default FaceNeutral
