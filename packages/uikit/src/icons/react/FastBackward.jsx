import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFastBackward = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.9997 16.437C21.9997 17.567 21.9997 18.1321 21.7714 18.4091 21.5731 18.6497 21.2739 18.7841 20.9623 18.7724 20.6036 18.759 20.1813 18.3836 19.3367 17.6329L14.345 13.1958C13.8797 12.7822 13.6471 12.5754 13.5614 12.3312 13.4861 12.1168 13.4861 11.8831 13.5614 11.6687 13.6471 11.4245 13.8797 11.2177 14.345 10.8041L19.3367 6.36706C20.1813 5.61631 20.6036 5.24093 20.9623 5.22751 21.2739 5.21584 21.5731 5.35021 21.7714 5.59086 21.9997 5.86787 21.9997 6.43288 21.9997 7.56291V16.437ZM10.9997 16.437C10.9997 17.567 10.9997 18.1321 10.7714 18.4091 10.5731 18.6497 10.2739 18.7841 9.96228 18.7724 9.60359 18.759 9.1813 18.3836 8.3367 17.6329L3.34502 13.1958C2.87973 12.7822 2.64709 12.5754 2.56135 12.3312 2.48606 12.1168 2.48606 11.8831 2.56135 11.6687 2.64709 11.4245 2.87973 11.2177 3.34502 10.8041L8.3367 6.36706C9.1813 5.61631 9.60359 5.24093 9.96228 5.22751 10.2739 5.21584 10.5731 5.35021 10.7714 5.59086 10.9997 5.86787 10.9997 6.43288 10.9997 7.56291V16.437Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFastBackward)
const FastBackward = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FastBackward'].join(' ')}
    />
  )
})
FastBackward.displayName = 'IconFastBackward'
export default FastBackward
