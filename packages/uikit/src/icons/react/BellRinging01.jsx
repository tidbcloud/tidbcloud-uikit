import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellRinging01 = (props, ref) => {
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
        d="M6.23628 13.9999C6.70637 14.4148 7.32387 14.6666 8.00017 14.6666C8.67646 14.6666 9.29396 14.4148 9.76405 13.9999M1.52943 3.87985C1.51986 2.91228 2.04152 2.00875 2.88423 1.53325M14.4683 3.87985C14.4778 2.91229 13.9562 2.00875 13.1134 1.53325M12.0002 5.33325C12.0002 4.27239 11.5787 3.25497 10.8286 2.50482C10.0784 1.75468 9.06103 1.33325 8.00017 1.33325C6.9393 1.33325 5.92188 1.75468 5.17174 2.50482C4.42159 3.25497 4.00017 4.27239 4.00017 5.33325C4.00017 7.39338 3.48048 8.80389 2.89994 9.73686C2.41025 10.5238 2.1654 10.9173 2.17438 11.0271C2.18432 11.1486 2.21007 11.195 2.30802 11.2676C2.39647 11.3333 2.79523 11.3333 3.59274 11.3333H12.4076C13.2051 11.3333 13.6039 11.3333 13.6923 11.2676C13.7903 11.195 13.816 11.1486 13.8259 11.0271C13.8349 10.9173 13.5901 10.5238 13.1004 9.73686C12.5199 8.80389 12.0002 7.39338 12.0002 5.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellRinging01)
const BellRinging01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BellRinging01', props.className].join(' ')}
    />
  )
})
BellRinging01.displayName = 'IconBellRinging01'
export default BellRinging01
