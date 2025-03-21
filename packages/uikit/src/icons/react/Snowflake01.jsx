import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSnowflake01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M18.0622 8.5L5.9378 15.5M18.0622 8.5L19.1602 4.40192M18.0622 8.5L22.1602 9.59808M5.9378 15.5L1.83972 14.4019M5.9378 15.5L4.83972 19.5981M18.0621 15.4999L5.93771 8.49986M18.0621 15.4999L22.1602 14.4018M18.0621 15.4999L19.1602 19.598M5.93771 8.49986L4.83986 4.40203M5.93771 8.49986L1.83986 9.59819M12 5L12 19M12 5L8.99998 2M12 5L15 2M12 19L8.99998 22M12 19L15 22"
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
      className={[props.className, 'tiui-icon', 'Snowflake01'].join(' ')}
    />
  )
})
Snowflake01.displayName = 'IconSnowflake01'
export default Snowflake01
