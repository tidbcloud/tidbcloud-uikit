import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUmbrella01 = (props, ref) => {
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
        d="M11.3334 12.9335C11.3334 13.8908 10.5872 14.6668 9.66672 14.6668C8.74625 14.6668 8.00006 13.8908 8.00006 12.9335V8.00016M1.4176 6.93767C1.9264 3.76077 4.67977 1.3335 8.00006 1.3335C11.3203 1.3335 14.0737 3.76077 14.5825 6.93767C14.6322 7.24775 14.657 7.40279 14.5947 7.56839C14.5451 7.70015 14.4236 7.8426 14.3014 7.91241C14.1477 8.00016 13.9652 8.00016 13.6001 8.00016H2.40006C2.03496 8.00016 1.85242 8.00016 1.69876 7.91241C1.5765 7.8426 1.45505 7.70015 1.40545 7.56839C1.3431 7.40279 1.36793 7.24775 1.4176 6.93767Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUmbrella01)
const Umbrella01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Umbrella01', props.className].join(' ')}
    />
  )
})
Umbrella01.displayName = 'IconUmbrella01'
export default Umbrella01
