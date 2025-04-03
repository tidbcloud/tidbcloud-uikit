import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSun01 = (props, ref) => {
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
        d="M12.9121 8.26988C13.9568 7.70709 14.6668 6.60313 14.6668 5.33333C14.6668 3.49238 13.1744 2 11.3335 2C9.49255 2 8.00016 3.49238 8.00016 5.33333M8.00016 5.33333C6.57501 5.33333 5.33976 6.1464 4.73297 7.33398C4.71098 7.33355 4.68893 7.33333 4.66683 7.33333C2.82588 7.33333 1.3335 8.82572 1.3335 10.6667C1.3335 12.5076 2.82588 14 4.66683 14C7.4903 14 9.16244 14 11.6668 14C13.3237 14 14.6668 12.6569 14.6668 11C14.6668 9.34315 13.3237 8 11.6668 8C11.6209 8 11.5751 8.00104 11.5297 8.00308C11.0954 6.4625 9.67965 5.33333 8.00016 5.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudSun01)
const CloudSun01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudSun01', props.className].join(' ')}
    />
  )
})
CloudSun01.displayName = 'IconCloudSun01'
export default CloudSun01
