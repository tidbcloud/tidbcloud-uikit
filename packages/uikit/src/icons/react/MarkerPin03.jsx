import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin03 = (props, ref) => {
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
        d="M7.99984 14.6668C8.6665 11.3335 13.3332 10.9457 13.3332 6.66683C13.3332 3.72131 10.9454 1.3335 7.99984 1.3335C5.05432 1.3335 2.6665 3.72131 2.6665 6.66683C2.6665 10.9457 7.33317 11.3335 7.99984 14.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99984 8.66683C9.10441 8.66683 9.99984 7.7714 9.99984 6.66683C9.99984 5.56226 9.10441 4.66683 7.99984 4.66683C6.89527 4.66683 5.99984 5.56226 5.99984 6.66683C5.99984 7.7714 6.89527 8.66683 7.99984 8.66683Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin03)
const MarkerPin03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin03', props.className].join(' ')}
    />
  )
})
MarkerPin03.displayName = 'IconMarkerPin03'
export default MarkerPin03
