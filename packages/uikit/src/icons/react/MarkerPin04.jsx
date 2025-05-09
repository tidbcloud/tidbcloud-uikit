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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.33331 9.5244C2.09907 10.0689 1.33331 10.8276 1.33331 11.6668C1.33331 13.3237 4.31808 14.6668 7.99998 14.6668C11.6819 14.6668 14.6666 13.3237 14.6666 11.6668C14.6666 10.8276 13.9009 10.0689 12.6666 9.5244M12 5.3335C12 8.04264 8.99998 9.3335 7.99998 11.3335C6.99998 9.3335 3.99998 8.04264 3.99998 5.3335C3.99998 3.12436 5.79084 1.3335 7.99998 1.3335C10.2091 1.3335 12 3.12436 12 5.3335ZM8.66665 5.3335C8.66665 5.70169 8.36817 6.00016 7.99998 6.00016C7.63179 6.00016 7.33331 5.70169 7.33331 5.3335C7.33331 4.96531 7.63179 4.66683 7.99998 4.66683C8.36817 4.66683 8.66665 4.96531 8.66665 5.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
