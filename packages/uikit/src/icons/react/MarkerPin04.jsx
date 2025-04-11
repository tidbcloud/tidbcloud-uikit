import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin04 = (props, ref) => {
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
        d="M3.3335 9.5244C2.09925 10.0689 1.3335 10.8276 1.3335 11.6668C1.3335 13.3237 4.31826 14.6668 8.00016 14.6668C11.6821 14.6668 14.6668 13.3237 14.6668 11.6668C14.6668 10.8276 13.9011 10.0689 12.6668 9.5244M12.0002 5.3335C12.0002 8.04264 9.00016 9.3335 8.00016 11.3335C7.00016 9.3335 4.00016 8.04264 4.00016 5.3335C4.00016 3.12436 5.79102 1.3335 8.00016 1.3335C10.2093 1.3335 12.0002 3.12436 12.0002 5.3335ZM8.66683 5.3335C8.66683 5.70169 8.36835 6.00016 8.00016 6.00016C7.63197 6.00016 7.3335 5.70169 7.3335 5.3335C7.3335 4.96531 7.63197 4.66683 8.00016 4.66683C8.36835 4.66683 8.66683 4.96531 8.66683 5.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin04)
const MarkerPin04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin04', props.className].join(' ')}
    />
  )
})
MarkerPin04.displayName = 'IconMarkerPin04'
export default MarkerPin04
