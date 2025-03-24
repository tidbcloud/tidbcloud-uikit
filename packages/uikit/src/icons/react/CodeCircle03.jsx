import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCodeCircle03 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#clip0_210_1594)">
        <path
          d="M10.3335 10.0002L12.3335 8.00016L10.3335 6.00016M5.66683 6.00016L3.66683 8.00016L5.66683 10.0002M8.66683 4.66683L7.3335 11.3335M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="inherit"
        />
      </g>
      <defs>
        <clipPath id="clip0_210_1594">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconCodeCircle03)
const CodeCircle03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CodeCircle03', props.className].join(' ')}
    />
  )
})
CodeCircle03.displayName = 'IconCodeCircle03'
export default CodeCircle03
