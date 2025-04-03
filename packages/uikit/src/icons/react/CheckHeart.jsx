import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCheckHeart = (props, ref) => {
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
        d="M6.00016 7.33333L7.3335 8.66667L10.3335 5.66667M7.9956 3.42388C6.6627 1.8656 4.43999 1.44643 2.76996 2.87334C1.09993 4.30026 0.864808 6.68598 2.17629 8.3736C3.16689 9.64829 5.98103 12.2073 7.29884 13.3833C7.54109 13.5994 7.66221 13.7075 7.80405 13.7501C7.92718 13.787 8.06401 13.787 8.18715 13.7501C8.32898 13.7075 8.45011 13.5994 8.69236 13.3833C10.0102 12.2073 12.8243 9.64829 13.8149 8.3736C15.1264 6.68598 14.92 4.28525 13.2212 2.87334C11.5225 1.46144 9.3285 1.8656 7.9956 3.42388Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckHeart)
const CheckHeart = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CheckHeart', props.className].join(' ')}
    />
  )
})
CheckHeart.displayName = 'IconCheckHeart'
export default CheckHeart
