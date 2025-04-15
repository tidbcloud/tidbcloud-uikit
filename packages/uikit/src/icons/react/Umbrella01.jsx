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
      ref={ref}
      {...props}
    >
      <path
        d="M11.3331 12.9335C11.3331 13.8908 10.587 14.6668 9.66648 14.6668C8.74601 14.6668 7.99981 13.8908 7.99981 12.9335V8.00016M1.41735 6.93767C1.92616 3.76077 4.67953 1.3335 7.99981 1.3335C11.3201 1.3335 14.0735 3.76077 14.5823 6.93767C14.6319 7.24775 14.6568 7.40279 14.5944 7.56839C14.5448 7.70015 14.4234 7.8426 14.3011 7.91241C14.1475 8.00016 13.9649 8.00016 13.5998 8.00016H2.39981C2.03472 8.00016 1.85217 8.00016 1.69851 7.91241C1.57626 7.8426 1.45481 7.70015 1.40521 7.56839C1.34286 7.40279 1.36769 7.24775 1.41735 6.93767Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
