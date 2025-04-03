import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFingerprint02 = (props, ref) => {
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
        d="M7.99984 6.66659V9.33325M4.96459 2.28061C5.82611 1.68327 6.8721 1.33325 7.99984 1.33325C10.9454 1.33325 13.3332 3.72107 13.3332 6.66659V7.49103M2.94405 4.96397C2.76406 5.49865 2.6665 6.07122 2.6665 6.66659V9.33325C2.6665 11.7565 4.28261 13.8023 6.49581 14.4516M13.1057 10.8791C12.6194 12.4875 11.3939 13.775 9.82433 14.3463M9.5498 4.09749C9.09744 3.82398 8.56702 3.66659 7.99984 3.66659C6.34298 3.66659 4.99984 5.00973 4.99984 6.66659V8.63325M10.9998 7.35992V9.33325C10.9998 10.9901 9.65669 12.3333 7.99984 12.3333C7.43407 12.3333 6.90488 12.1766 6.45326 11.9044"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFingerprint02)
const Fingerprint02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Fingerprint02', props.className].join(' ')}
    />
  )
})
Fingerprint02.displayName = 'IconFingerprint02'
export default Fingerprint02
