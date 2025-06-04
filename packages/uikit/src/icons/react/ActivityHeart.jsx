import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconActivityHeart = (props, ref) => {
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
        d="M10.3333 7.66667H9.66667L8.66667 9.66667L7.33334 5.66667L6.33334 7.66667H5.66667M7.99544 3.42388C6.66254 1.8656 4.43983 1.44643 2.7698 2.87334C1.09977 4.30026 0.864648 6.68598 2.17613 8.3736C3.16673 9.64829 5.98086 12.2073 7.29868 13.3833C7.54093 13.5994 7.66205 13.7075 7.80389 13.7501C7.92702 13.787 8.06385 13.787 8.18699 13.7501C8.32882 13.7075 8.44995 13.5994 8.6922 13.3833C10.01 12.2073 12.8241 9.64829 13.8147 8.3736C15.1262 6.68598 14.9198 4.28525 13.2211 2.87334C11.5223 1.46144 9.32834 1.8656 7.99544 3.42388Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconActivityHeart)
const ActivityHeart = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ActivityHeart', props.className].join(' ')}
    />
  )
})
ActivityHeart.displayName = 'IconActivityHeart'
export default ActivityHeart
