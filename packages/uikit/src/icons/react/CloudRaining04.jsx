import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining04 = (props, ref) => {
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
        d="M10.6667 12.3335V14.0002M5.33337 12.3335V14.0002M8.00004 13.0002V14.6668M4.66671 10.0002C2.82576 10.0002 1.33337 8.50778 1.33337 6.66683C1.33337 4.82588 2.82576 3.3335 4.66671 3.3335C4.68881 3.3335 4.71085 3.33371 4.73285 3.33414C5.33964 2.14656 6.57489 1.3335 8.00004 1.3335C9.67953 1.3335 11.0953 2.46267 11.5296 4.00324C11.575 4.0012 11.6207 4.00016 11.6667 4.00016C13.3236 4.00016 14.6667 5.34331 14.6667 7.00016C14.6667 8.65702 13.3236 10.0002 11.6667 10.0002C9.16232 10.0002 7.49018 10.0002 4.66671 10.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining04)
const CloudRaining04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudRaining04', props.className].join(' ')}
    />
  )
})
CloudRaining04.displayName = 'IconCloudRaining04'
export default CloudRaining04
