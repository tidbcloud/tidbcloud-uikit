import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCameraOff = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5h.419c.133 0 .2 0 .26-.004a2 2 0 0 0 1.735-1.25c.023-.056.044-.12.086-.246.042-.127.063-.19.086-.246a2 2 0 0 1 1.735-1.25C9.38 2 9.448 2 9.58 2h4.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246.042.127.063.19.086.246a2 2 0 0 0 1.735 1.25c.06.004.131.004.273.004.37 0 .554 0 .702.015a3 3 0 0 1 2.69 2.69c.014.147.014.322.014.672V18a3 3 0 0 1-1.439 2.562m-5.497-5.49A4 4 0 0 0 9.43 9.434M22 22 2 2m0 5.5v8.7c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h8.7M12 16.5a4 4 0 0 1-4-4"
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
      className={[props.className, 'tiui-icon', 'CameraOff'].join(' ')}
    />
  )
})
CameraOff.displayName = 'IconCameraOff'
export default CameraOff
