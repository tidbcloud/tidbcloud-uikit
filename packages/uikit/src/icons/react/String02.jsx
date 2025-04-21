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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M2.66659 9.85965H7.33325M1.33325 12.6667L4.82532 2L8.66659 12.6667M9.66646 6C9.66646 6 10.4508 3.97674 12.3331 4.33333C14.2155 4.68992 14.039 6.68478 14.039 7.57622V8.76483M14.039 8.76483V11.4392M14.039 8.76483C13.7253 8.36863 12.8469 7.57623 11.8429 7.57622C10.588 7.57622 9.66646 8.76483 9.66646 9.95345C9.66646 11.1421 9.96058 12.3307 11.5292 12.6278C12.7976 12.8681 13.6207 11.9345 14.039 11.4392M14.039 11.4392C14.039 11.8354 14.1645 12.6278 14.6665 12.6278"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
