import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBackpack = (props, ref) => {
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
        d="M13.3333 8.66667V11.8667C13.3333 12.6134 13.3333 12.9868 13.188 13.272C13.0602 13.5229 12.8562 13.7268 12.6053 13.8547C12.3201 14 11.9467 14 11.2 14H4.8C4.05326 14 3.6799 14 3.39468 13.8547C3.1438 13.7268 2.93982 13.5229 2.81199 13.272C2.66667 12.9868 2.66667 12.6134 2.66667 11.8667V8.66667M6 6.66667H10M6.19048 9.33333H9.80952C11.2312 9.33333 11.942 9.33333 12.4904 9.06925C13.0346 8.80714 13.4738 8.36798 13.7359 7.82369C14 7.27532 14 6.5645 14 5.14286C14 4.07663 14 3.54351 13.8019 3.13223C13.6054 2.72402 13.276 2.39465 12.8678 2.19806C12.4565 2 11.9234 2 10.8571 2H5.14286C4.07663 2 3.54351 2 3.13223 2.19806C2.72402 2.39465 2.39465 2.72402 2.19806 3.13223C2 3.54351 2 4.07663 2 5.14286C2 6.5645 2 7.27532 2.26408 7.82369C2.5262 8.36798 2.96536 8.80714 3.50964 9.06925C4.05802 9.33333 4.76884 9.33333 6.19048 9.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBackpack)
const Backpack = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Backpack', props.className].join(' ')}
    />
  )
})
Backpack.displayName = 'IconBackpack'
export default Backpack
