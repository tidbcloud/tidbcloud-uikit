import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeartCircle = (props, ref) => {
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
        d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00001 1.33337C4.31811 1.33337 1.33334 4.31814 1.33334 8.00004C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99773 6.04531C7.33128 5.26617 6.21993 5.05659 5.38491 5.77005C4.54989 6.4835 4.43233 7.67637 5.08808 8.52017C5.50808 9.06064 6.58373 10.0629 7.30283 10.7136C7.5418 10.9299 7.66128 11.038 7.8044 11.0814C7.92743 11.1186 8.06803 11.1186 8.19105 11.0814C8.33417 11.038 8.45365 10.9299 8.69262 10.7136C9.41172 10.0629 10.4874 9.06064 10.9074 8.52017C11.5631 7.67637 11.4599 6.476 10.6105 5.77005C9.76118 5.06409 8.66418 5.26617 7.99773 6.04531Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeartCircle)
const HeartCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HeartCircle', props.className].join(' ')}
    />
  )
})
HeartCircle.displayName = 'IconHeartCircle'
export default HeartCircle
