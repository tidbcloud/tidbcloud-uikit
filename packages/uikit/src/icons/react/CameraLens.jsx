import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCameraLens = (props, ref) => {
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
        d="M14.277 10.2276C12.395 11.5665 9.92635 11.7152 7.91806 10.6668M1.723 5.77276C3.60964 4.4306 6.08567 4.28441 8.09659 5.34116M10.2492 9.41639C12.1736 8.2035 13.2879 5.98292 13.0674 3.67498M5.72127 6.60264C3.81492 7.81956 2.7131 10.0292 2.93256 12.3254M10.3513 6.75819C10.2626 4.48584 8.89668 2.41139 6.78811 1.44831M5.65045 9.28392C5.75412 11.5399 7.11623 13.5948 9.21187 14.552M12.7141 3.28612C15.3176 5.88962 15.3176 10.1107 12.7141 12.7142C10.1106 15.3177 5.88948 15.3177 3.286 12.7142C0.6825 10.1107 0.6825 5.8896 3.286 3.28612C5.88949 0.682622 10.1106 0.682622 12.7141 3.28612ZM9.88566 6.11454C10.9271 7.15594 10.9271 8.84439 9.88566 9.88578C8.84426 10.9272 7.15582 10.9272 6.11442 9.88578C5.07302 8.84439 5.07302 7.15594 6.11442 6.11454C7.15582 5.07315 8.84426 5.07315 9.88566 6.11454Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCameraLens)
const CameraLens = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CameraLens', props.className].join(' ')}
    />
  )
})
CameraLens.displayName = 'IconCameraLens'
export default CameraLens
