import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconEraser = (props, ref) => {
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
        d="M11.9998 8.66669L7.33311 4.00002M13.9998 14H5.33311M7.29128 13.3752L13.0704 7.5961C13.8624 6.80406 14.2584 6.40805 14.4068 5.95139C14.5373 5.5497 14.5373 5.11701 14.4068 4.71532C14.2584 4.25867 13.8624 3.86265 13.0704 3.07062L12.9292 2.92943C12.1372 2.1374 11.7411 1.74138 11.2845 1.593C10.8828 1.46249 10.4501 1.46249 10.0484 1.593C9.59175 1.74138 9.19574 2.1374 8.4037 2.92943L2.92919 8.40395C2.13715 9.19598 1.74114 9.592 1.59276 10.0487C1.46224 10.4503 1.46224 10.883 1.59276 11.2847C1.74114 11.7414 2.13715 12.1374 2.92919 12.9294L3.37494 13.3752C3.60554 13.6058 3.72084 13.7211 3.8554 13.8035C3.9747 13.8766 4.10475 13.9305 4.2408 13.9632C4.39425 14 4.55731 14 4.88343 14H5.78279C6.10891 14 6.27197 14 6.42542 13.9632C6.56147 13.9305 6.69153 13.8766 6.81083 13.8035C6.94538 13.7211 7.06068 13.6058 7.29128 13.3752Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconEraser)
const Eraser = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Eraser', props.className].join(' ')}
    />
  )
})
Eraser.displayName = 'IconEraser'
export default Eraser
