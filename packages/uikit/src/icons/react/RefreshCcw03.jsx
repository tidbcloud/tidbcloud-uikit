import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw03 = (props, ref) => {
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
        d="M9.33333 1.33337C9.33333 1.33337 9.8995 1.41425 12.2426 3.7574C14.5858 6.10055 14.5858 9.89954 12.2426 12.2427C11.4125 13.0729 10.3995 13.6089 9.33333 13.8508M9.33333 1.33337L13.3333 1.33337M9.33333 1.33337L9.33333 5.33337M6.66667 14.6666C6.66667 14.6666 6.10051 14.5857 3.75736 12.2426C1.41421 9.8994 1.41421 6.10042 3.75736 3.75727C4.58754 2.92709 5.60048 2.39104 6.66667 2.14913M6.66667 14.6666L2.66667 14.6667M6.66667 14.6666L6.66667 10.6667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw03)
const RefreshCcw03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCcw03', props.className].join(' ')}
    />
  )
})
RefreshCcw03.displayName = 'IconRefreshCcw03'
export default RefreshCcw03
