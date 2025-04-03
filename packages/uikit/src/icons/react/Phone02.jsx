import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPhone02 = (props, ref) => {
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
        d="M10.0002 1.33325V2.26659C10.0002 2.63995 10.0002 2.82664 9.9275 2.96925C9.86359 3.09469 9.7616 3.19667 9.63616 3.26059C9.49355 3.33325 9.30686 3.33325 8.9335 3.33325H7.06683C6.69346 3.33325 6.50678 3.33325 6.36417 3.26059C6.23873 3.19667 6.13674 3.09469 6.07283 2.96925C6.00016 2.82664 6.00016 2.63995 6.00016 2.26659V1.33325M5.46683 14.6666H10.5335C11.2802 14.6666 11.6536 14.6666 11.9388 14.5213C12.1897 14.3934 12.3937 14.1895 12.5215 13.9386C12.6668 13.6534 12.6668 13.28 12.6668 12.5333V3.46659C12.6668 2.71985 12.6668 2.34648 12.5215 2.06126C12.3937 1.81038 12.1897 1.60641 11.9388 1.47858C11.6536 1.33325 11.2802 1.33325 10.5335 1.33325H5.46683C4.72009 1.33325 4.34672 1.33325 4.06151 1.47858C3.81063 1.60641 3.60665 1.81038 3.47882 2.06126C3.3335 2.34648 3.3335 2.71985 3.3335 3.46659V12.5333C3.3335 13.28 3.3335 13.6534 3.47882 13.9386C3.60665 14.1895 3.81063 14.3934 4.06151 14.5213C4.34672 14.6666 4.72009 14.6666 5.46683 14.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPhone02)
const Phone02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Phone02', props.className].join(' ')}
    />
  )
})
Phone02.displayName = 'IconPhone02'
export default Phone02
