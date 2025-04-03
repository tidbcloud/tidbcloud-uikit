import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellRinging02 = (props, ref) => {
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
        d="M9.33353 13.9999H6.66687M1.52943 3.87985C1.51986 2.91228 2.04152 2.00875 2.88423 1.53325M14.4683 3.87985C14.4779 2.91229 13.9562 2.00875 13.1135 1.53325M12.0002 5.33325C12.0002 4.27239 11.5788 3.25497 10.8286 2.50482C10.0785 1.75468 9.06106 1.33325 8.0002 1.33325C6.93933 1.33325 5.92192 1.75468 5.17177 2.50482C4.42163 3.25497 4.0002 4.27239 4.0002 5.33325C4.0002 7.39338 3.48051 8.80389 2.89998 9.73686C2.41028 10.5238 2.16544 10.9173 2.17442 11.0271C2.18436 11.1486 2.21011 11.195 2.30805 11.2676C2.3965 11.3333 2.79526 11.3333 3.59277 11.3333H12.4076C13.2051 11.3333 13.6039 11.3333 13.6923 11.2676C13.7903 11.195 13.816 11.1486 13.826 11.0271C13.835 10.9173 13.5901 10.5238 13.1004 9.73686C12.5199 8.80389 12.0002 7.39338 12.0002 5.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellRinging02)
const BellRinging02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BellRinging02', props.className].join(' ')}
    />
  )
})
BellRinging02.displayName = 'IconBellRinging02'
export default BellRinging02
