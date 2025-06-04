import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronRight1 = (props, ref) => {
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
        d="M5.59968 12.5502C5.34043 12.3517 5.33312 11.9023 5.33314 11.6514L5.33314 8.06238L5.33301 4.54155C5.33301 4.24194 5.33321 3.81193 5.48011 3.56211C5.60899 3.34294 5.81548 3.32034 5.9617 3.33803C6.07799 3.3521 6.17662 3.42198 6.26184 3.50235L10.3871 7.39276C10.3955 7.4007 10.4037 7.40874 10.4115 7.41736C10.463 7.47494 10.6663 7.72346 10.6663 8.06241C10.6663 8.38653 10.4804 8.62796 10.4191 8.69881C10.4064 8.71343 10.3947 8.72461 10.3804 8.73754C10.0774 9.01016 6.31264 12.3982 6.13302 12.5502C5.94585 12.7087 5.79782 12.702 5.59968 12.5502Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronRight1)
const ChevronRight1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChevronRight1', props.className].join(' ')}
    />
  )
})
ChevronRight1.displayName = 'IconChevronRight1'
export default ChevronRight1
