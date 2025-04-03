import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLoadingLoop = (props, ref) => {
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
        d="M2.50033 8.00008C2.50033 4.96252 4.96276 2.50008 8.00033 2.50008V0.666748C3.95024 0.666748 0.666992 3.94999 0.666992 8.00008C0.666992 12.0502 3.95024 15.3334 8.00033 15.3334C10.0254 15.3334 11.8587 14.5126 13.1858 13.1855L11.8894 11.8892C10.8941 12.8845 9.51911 13.5001 8.00033 13.5001C4.96276 13.5001 2.50033 11.0376 2.50033 8.00008Z"
        fill="#C4CDD0"
      />
      <path
        d="M13.1854 13.1855C14.211 12.1599 14.9095 10.8533 15.1924 9.43074C15.4754 8.00822 15.3302 6.53373 14.7751 5.19374C14.2201 3.85374 13.2801 2.70843 12.0742 1.90264C10.8682 1.09684 9.4504 0.666748 8 0.666748V2.5043C9.08696 2.5043 10.1495 2.82662 11.0533 3.4305C11.9571 4.03439 12.6615 4.89271 13.0774 5.89694C13.4934 6.90116 13.6022 8.00618 13.3902 9.07226C13.1781 10.1383 12.6547 11.1176 11.8861 11.8862L13.1854 13.1855Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLoadingLoop)
const LoadingLoop = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LoadingLoop', props.className].join(' ')}
    />
  )
})
LoadingLoop.displayName = 'IconLoadingLoop'
export default LoadingLoop
