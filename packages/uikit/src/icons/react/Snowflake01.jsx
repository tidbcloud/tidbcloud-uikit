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
      ref={ref}
      {...props}
    >
      <path
        d="M12.0415 5.66683L3.95861 10.3335M12.0415 5.66683L12.7736 2.93478M12.0415 5.66683L14.7736 6.39888M3.95861 10.3335L1.22656 9.60145M3.95861 10.3335L3.22656 13.0655M12.0415 10.3334L3.95856 5.66673M12.0415 10.3334L14.7736 9.60137M12.0415 10.3334L12.7736 13.0655M3.95856 5.66673L3.22666 2.93485M3.95856 5.66673L1.22666 6.39895M8.00007 3.3335L8.00007 12.6668M8.00007 3.3335L6.00007 1.3335M8.00007 3.3335L10.0001 1.3335M8.00007 12.6668L6.00007 14.6668M8.00007 12.6668L10.0001 14.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
