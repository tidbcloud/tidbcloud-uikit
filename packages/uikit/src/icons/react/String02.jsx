import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconString02 = (props, ref) => {
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
        d="M2.66634 9.85965H7.33301M1.33301 12.6667L4.82507 2L8.66634 12.6667M9.66622 6C9.66622 6 10.4505 3.97674 12.3329 4.33333C14.2152 4.68992 14.0388 6.68478 14.0388 7.57622V8.76483M14.0388 8.76483V11.4392M14.0388 8.76483C13.725 8.36863 12.8466 7.57623 11.8427 7.57622C10.5878 7.57622 9.66622 8.76483 9.66622 9.95345C9.66622 11.1421 9.96034 12.3307 11.529 12.6278C12.7974 12.8681 13.6205 11.9345 14.0388 11.4392M14.0388 11.4392C14.0388 11.8354 14.1643 12.6278 14.6662 12.6278"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconString02)
const String02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'String02', props.className].join(' ')}
    />
  )
})
String02.displayName = 'IconString02'
export default String02
