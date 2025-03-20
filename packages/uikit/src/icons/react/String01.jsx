import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconString01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.667 10.842h4.667m-6 3.158L4.826 2l3.84 12m.668-7.064c.313-1.337.94-2.741 2.823-2.34 1.882.401 1.882 2.674 1.882 3.677V9.61m0 0v3.01m0-3.01c-.313-.445-1.192-1.337-2.196-1.337-1.255 0-2.196 1.337-2.196 2.675s.314 2.674 1.883 3.008c1.268.27 2.091-.78 2.51-1.337m0 0c0 .446.125 1.337.627 1.337"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconString01)
const String01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'String01'].join(' ')}
    />
  )
})
String01.displayName = 'IconString01'
export default String01
