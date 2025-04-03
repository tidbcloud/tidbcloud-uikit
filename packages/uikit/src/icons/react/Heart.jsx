import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeart = (props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.9956 3.42388C6.6627 1.8656 4.43999 1.44643 2.76996 2.87334C1.09993 4.30026 0.864808 6.68598 2.17629 8.3736C3.26671 9.77674 6.56668 12.7361 7.64823 13.6939C7.76923 13.801 7.82973 13.8546 7.9003 13.8757C7.9619 13.8941 8.0293 13.8941 8.09089 13.8757C8.16146 13.8546 8.22196 13.801 8.34297 13.6939C9.42452 12.7361 12.7245 9.77674 13.8149 8.3736C15.1264 6.68598 14.92 4.28525 13.2212 2.87334C11.5225 1.46144 9.3285 1.8656 7.9956 3.42388Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeart)
const Heart = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Heart', props.className].join(' ')}
    />
  )
})
Heart.displayName = 'IconHeart'
export default Heart
