import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw04 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 20"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.167 4.271A7.083 7.083 0 0 1 8 17.083h-.417m-3.75-1.354A7.083 7.083 0 0 1 8 2.917h.417m.416 15.75L7.167 17l1.666-1.667M7.167 4.667 8.833 3 7.167 1.333"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw04)
const RefreshCw04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RefreshCw04'].join(' ')}
    />
  )
})
RefreshCw04.displayName = 'IconRefreshCw04'
export default RefreshCw04
