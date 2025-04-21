import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLock02 = (props, ref) => {
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
        d="M11.3333 7.33333V5.33333C11.3333 3.49238 9.84095 2 8 2C6.15905 2 4.66667 3.49238 4.66667 5.33333V7.33333M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V10.5333C14 9.41323 14 8.85318 13.782 8.42535C13.5903 8.04903 13.2843 7.74307 12.908 7.55132C12.4802 7.33333 11.9201 7.33333 10.8 7.33333H5.2C4.0799 7.33333 3.51984 7.33333 3.09202 7.55132C2.71569 7.74307 2.40973 8.04903 2.21799 8.42535C2 8.85318 2 9.41323 2 10.5333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLock02)
const Lock02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lock02', props.className].join(' ')}
    />
  )
})
Lock02.displayName = 'IconLock02'
export default Lock02
