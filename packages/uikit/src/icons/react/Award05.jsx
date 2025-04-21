import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAward05 = (props, ref) => {
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
        d="M4.75676 7.45948L2.22027 2.92051C1.92861 2.39859 1.78278 2.13764 1.80736 1.92398C1.8288 1.73757 1.9278 1.56883 2.08007 1.45918C2.25459 1.3335 2.55353 1.3335 3.1514 1.3335H4.64129C4.86348 1.3335 4.97458 1.3335 5.07423 1.36559C5.16241 1.39398 5.24371 1.44044 5.31293 1.502C5.39116 1.57158 5.44755 1.6673 5.56033 1.85875L8.00007 6.00016L10.4398 1.85875C10.5526 1.6673 10.609 1.57158 10.6872 1.502C10.7564 1.44044 10.8377 1.39398 10.9259 1.36559C11.0256 1.3335 11.1367 1.3335 11.3589 1.3335H12.8487C13.4466 1.3335 13.7456 1.3335 13.9201 1.45918C14.0723 1.56883 14.1713 1.73757 14.1928 1.92398C14.2174 2.13764 14.0715 2.39859 13.7799 2.92051L11.2434 7.45948M7.00007 9.3335L8.00007 8.66683V12.0002M7.16674 12.0002H8.8334M11.0642 7.26936C12.7565 8.96163 12.7565 11.7054 11.0642 13.3976C9.37193 15.0899 6.62822 15.0899 4.93594 13.3976C3.24367 11.7054 3.24367 8.96164 4.93594 7.26936C6.62821 5.5771 9.37192 5.5771 11.0642 7.26936Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAward05)
const Award05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Award05', props.className].join(' ')}
    />
  )
})
Award05.displayName = 'IconAward05'
export default Award05
