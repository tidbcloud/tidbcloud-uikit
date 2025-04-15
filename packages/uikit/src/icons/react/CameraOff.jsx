import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCameraOff = (props, ref) => {
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
        d="M3.3335 3.3335H3.61274C3.70168 3.3335 3.74616 3.3335 3.78642 3.33106C4.30057 3.29992 4.7508 2.97541 4.94293 2.4975C4.95797 2.46007 4.97204 2.41788 5.00016 2.3335C5.02829 2.24911 5.04235 2.20692 5.0574 2.1695C5.24953 1.69158 5.69976 1.36707 6.21391 1.33593C6.25417 1.3335 6.29864 1.3335 6.38759 1.3335H9.61274C9.70168 1.3335 9.74616 1.3335 9.78642 1.33593C10.3006 1.36707 10.7508 1.69158 10.9429 2.1695C10.958 2.20692 10.972 2.24911 11.0002 2.3335C11.0283 2.41788 11.0424 2.46007 11.0574 2.4975C11.2495 2.97541 11.6998 3.29992 12.2139 3.33106C12.2542 3.3335 12.3016 3.3335 12.3964 3.3335C12.6426 3.3335 12.7657 3.3335 12.864 3.34324C13.8127 3.43723 14.5631 4.18767 14.6571 5.1363C14.6668 5.23466 14.6668 5.35143 14.6668 5.58498V12.0002C14.6668 12.7234 14.2829 13.357 13.7077 13.7083M10.0429 10.0478C10.4323 9.58424 10.6668 8.98626 10.6668 8.3335C10.6668 6.86074 9.47292 5.66683 8.00016 5.66683C7.34788 5.66683 6.75029 5.90103 6.28691 6.28992M14.6668 14.6668L1.3335 1.3335M1.3335 5.00016V10.8002C1.3335 11.9203 1.3335 12.4803 1.55148 12.9081C1.74323 13.2845 2.04919 13.5904 2.42552 13.7822C2.85334 14.0002 3.41339 14.0002 4.5335 14.0002H10.3335M8.00016 11.0002C6.5274 11.0002 5.3335 9.80626 5.3335 8.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCameraOff)
const CameraOff = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CameraOff', props.className].join(' ')}
    />
  )
})
CameraOff.displayName = 'IconCameraOff'
export default CameraOff
