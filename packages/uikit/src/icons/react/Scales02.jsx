import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconScales02 = (props, ref) => {
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
        d="M1.667 8.66683H5.667M10.3337 8.66683H14.3337M8.00034 4.66683V14.0002M8.00034 4.66683C8.92081 4.66683 9.667 3.92064 9.667 3.00016M8.00034 4.66683C7.07986 4.66683 6.33367 3.92064 6.33367 3.00016M2.667 14.0002L13.3337 14.0002M2.667 3.00017L6.33367 3.00016M6.33367 3.00016C6.33367 2.07969 7.07986 1.3335 8.00034 1.3335C8.92081 1.3335 9.667 2.07969 9.667 3.00016M9.667 3.00016L13.3337 3.00016M5.92063 9.55774C5.6535 10.5806 4.74574 11.3335 3.667 11.3335C2.58827 11.3335 1.68051 10.5806 1.41338 9.55774C1.39155 9.47416 1.38064 9.43238 1.37959 9.26541C1.37894 9.16306 1.41698 8.92707 1.44975 8.83011C1.50321 8.67193 1.56107 8.58264 1.67681 8.40408L3.667 5.3335L5.6572 8.40408C5.77293 8.58264 5.8308 8.67193 5.88426 8.83011C5.91703 8.92707 5.95507 9.16306 5.95442 9.26541C5.95337 9.43238 5.94246 9.47416 5.92063 9.55774ZM14.5873 9.55774C14.3202 10.5806 13.4124 11.3335 12.3337 11.3335C11.2549 11.3335 10.3472 10.5806 10.08 9.55774C10.0582 9.47416 10.0473 9.43238 10.0463 9.26541C10.0456 9.16306 10.0836 8.92707 10.1164 8.83011C10.1699 8.67193 10.2277 8.58264 10.3435 8.40408L12.3337 5.3335L14.3239 8.40408C14.4396 8.58264 14.4975 8.67193 14.5509 8.83011C14.5837 8.92707 14.6217 9.16306 14.6211 9.26541C14.62 9.43238 14.6091 9.47416 14.5873 9.55774Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconScales02)
const Scales02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Scales02', props.className].join(' ')}
    />
  )
})
Scales02.displayName = 'IconScales02'
export default Scales02
