import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUmbrella03 = (props, ref) => {
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
        d="M6.25 21.96 12 12m5-8.66C12.687.85 7.29 1.938 4.246 5.683c-.297.366-.446.548-.489.81-.034.209.017.485.123.667.134.23.371.366.845.64l14.55 8.4c.474.274.711.41.976.412.212.001.476-.093.64-.227.205-.168.289-.388.457-.828C23.07 11.048 21.313 5.83 17 3.34m0 0C15.087 2.235 11.297 5.217 8.536 10M17 3.34c1.913 1.105 1.226 5.877-1.536 10.66M22 22H2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUmbrella03)
const Umbrella03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Umbrella03'].join(' ')}
    />
  )
})
Umbrella03.displayName = 'IconUmbrella03'
export default Umbrella03
