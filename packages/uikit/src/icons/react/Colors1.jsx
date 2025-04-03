import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconColors1 = (props, ref) => {
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
        d="M8.00016 13.6483C8.70783 14.2817 9.64235 14.6668 10.6668 14.6668C12.876 14.6668 14.6668 12.876 14.6668 10.6668C14.6668 8.82221 13.4182 7.26922 11.72 6.80695M4.28028 6.80694C2.58212 7.26921 1.3335 8.82221 1.3335 10.6668C1.3335 12.876 3.12436 14.6668 5.3335 14.6668C7.54264 14.6668 9.3335 12.876 9.3335 10.6668C9.3335 10.1465 9.23414 9.64937 9.05338 9.19339M12.0002 5.3335C12.0002 7.54264 10.2093 9.3335 8.00016 9.3335C5.79102 9.3335 4.00016 7.54264 4.00016 5.3335C4.00016 3.12436 5.79102 1.3335 8.00016 1.3335C10.2093 1.3335 12.0002 3.12436 12.0002 5.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconColors1)
const Colors1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Colors1', props.className].join(' ')}
    />
  )
})
Colors1.displayName = 'IconColors1'
export default Colors1
