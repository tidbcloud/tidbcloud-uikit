import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRss02 = (props, ref) => {
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
        d="M2.00016 8.68164C5.45681 8.16191 7.83724 10.5431 7.31826 13.9997M2.00016 5.35856C7.29201 4.83883 11.1611 8.70797 10.6414 13.9998M2.00016 2.03474C9.12795 1.51576 14.4843 6.8721 13.9653 13.9999M3.33333 14C2.5971 14 2 13.4029 2 12.6667C2 11.9304 2.5971 11.3333 3.33333 11.3333C4.06956 11.3333 4.66667 11.9304 4.66667 12.6667C4.66667 13.4029 4.06956 14 3.33333 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRss02)
const Rss02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Rss02', props.className].join(' ')}
    />
  )
})
Rss02.displayName = 'IconRss02'
export default Rss02
