import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeartRounded = (props, ref) => {
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
        d="M10.7409 2C13.0891 2 14.6668 4.235 14.6668 6.32C14.6668 10.5425 8.11868 14 8.00016 14C7.88164 14 1.3335 10.5425 1.3335 6.32C1.3335 4.235 2.91127 2 5.25942 2C6.60757 2 7.48905 2.6825 8.00016 3.2825C8.51127 2.6825 9.39276 2 10.7409 2Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeartRounded)
const HeartRounded = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HeartRounded', props.className].join(' ')}
    />
  )
})
HeartRounded.displayName = 'IconHeartRounded'
export default HeartRounded
