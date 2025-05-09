import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCamera01 = (props, ref) => {
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
        d="M1.33337 5.58498C1.33337 5.35143 1.33337 5.23466 1.34312 5.1363C1.43711 4.18768 2.18755 3.43723 3.13618 3.34324C3.23454 3.3335 3.35761 3.3335 3.60376 3.3335C3.69861 3.3335 3.74603 3.3335 3.7863 3.33106C4.30045 3.29992 4.75068 2.97541 4.9428 2.4975C4.95785 2.46007 4.97191 2.41788 5.00004 2.3335C5.02817 2.24911 5.04223 2.20692 5.05728 2.1695C5.24941 1.69158 5.69963 1.36707 6.21378 1.33593C6.25405 1.3335 6.29852 1.3335 6.38747 1.3335H9.61262C9.70156 1.3335 9.74603 1.3335 9.7863 1.33593C10.3004 1.36707 10.7507 1.69158 10.9428 2.1695C10.9579 2.20692 10.9719 2.24911 11 2.3335C11.0282 2.41788 11.0422 2.46007 11.0573 2.4975C11.2494 2.97541 11.6996 3.29992 12.2138 3.33106C12.254 3.3335 12.3015 3.3335 12.3963 3.3335C12.6425 3.3335 12.7655 3.3335 12.8639 3.34324C13.8125 3.43723 14.563 4.18768 14.657 5.1363C14.6667 5.23466 14.6667 5.35143 14.6667 5.58498V10.8002C14.6667 11.9203 14.6667 12.4803 14.4487 12.9081C14.257 13.2845 13.951 13.5904 13.5747 13.7822C13.1469 14.0002 12.5868 14.0002 11.4667 14.0002H4.53337C3.41327 14.0002 2.85322 14.0002 2.42539 13.7822C2.04907 13.5904 1.74311 13.2845 1.55136 12.9081C1.33337 12.4803 1.33337 11.9203 1.33337 10.8002V5.58498Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.00004 11.0002C9.4728 11.0002 10.6667 9.80626 10.6667 8.3335C10.6667 6.86074 9.4728 5.66683 8.00004 5.66683C6.52728 5.66683 5.33337 6.86074 5.33337 8.3335C5.33337 9.80626 6.52728 11.0002 8.00004 11.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCamera01)
const Camera01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Camera01', props.className].join(' ')}
    />
  )
})
Camera01.displayName = 'IconCamera01'
export default Camera01
