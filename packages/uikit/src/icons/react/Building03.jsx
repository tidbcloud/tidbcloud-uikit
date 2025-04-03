import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding03 = (props, ref) => {
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
        d="M5.00016 4.66667H6.8335M5.00016 7.33333H6.8335M5.00016 10H6.8335M9.16683 4.66667H11.0002M9.16683 7.33333H11.0002M9.16683 10H11.0002M13.3335 14V4.13333C13.3335 3.3866 13.3335 3.01323 13.1882 2.72801C13.0603 2.47713 12.8564 2.27316 12.6055 2.14532C12.3203 2 11.9469 2 11.2002 2H4.80016C4.05343 2 3.68006 2 3.39484 2.14532C3.14396 2.27316 2.93999 2.47713 2.81215 2.72801C2.66683 3.01323 2.66683 3.3866 2.66683 4.13333V14M14.6668 14H1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding03)
const Building03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building03', props.className].join(' ')}
    />
  )
})
Building03.displayName = 'IconBuilding03'
export default Building03
