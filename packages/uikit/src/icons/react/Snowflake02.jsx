import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSnowflake02 = (props, ref) => {
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
        d="M8.00016 5.3335V10.6668M8.00016 5.3335V1.3335M8.00016 5.3335L4.66683 2.00016M8.00016 5.3335L11.3335 2.00016M8.00016 10.6668V14.6668M8.00016 10.6668L4.66683 14.0002M8.00016 10.6668L11.3335 14.0002M10.6668 8.00016H5.3335M10.6668 8.00016H14.6668M10.6668 8.00016L14.0002 4.66683M10.6668 8.00016L14.0002 11.3335M5.3335 8.00016H1.3335M5.3335 8.00016L2.00016 4.66683M5.3335 8.00016L2.00016 11.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSnowflake02)
const Snowflake02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Snowflake02', props.className].join(' ')}
    />
  )
})
Snowflake02.displayName = 'IconSnowflake02'
export default Snowflake02
