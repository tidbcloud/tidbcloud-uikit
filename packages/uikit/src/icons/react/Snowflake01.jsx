import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSnowflake01 = (props, ref) => {
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
        d="M12.0414 5.66683L3.95849 10.3335M12.0414 5.66683L12.7734 2.93478M12.0414 5.66683L14.7734 6.39888M3.95849 10.3335L1.22644 9.60145M3.95849 10.3335L3.22644 13.0655M12.0413 10.3334L3.95844 5.66673M12.0413 10.3334L14.7735 9.60137M12.0413 10.3334L12.7735 13.0655M3.95844 5.66673L3.22654 2.93485M3.95844 5.66673L1.22654 6.39895M7.99994 3.3335L7.99994 12.6668M7.99994 3.3335L5.99994 1.3335M7.99994 3.3335L9.99994 1.3335M7.99994 12.6668L5.99994 14.6668M7.99994 12.6668L9.99994 14.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSnowflake01)
const Snowflake01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Snowflake01', props.className].join(' ')}
    />
  )
})
Snowflake01.displayName = 'IconSnowflake01'
export default Snowflake01
