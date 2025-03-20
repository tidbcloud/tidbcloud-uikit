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
        d="M12.1667 4.27118C13.9344 5.55912 15.0833 7.6454 15.0833 10C15.0833 13.912 11.912 17.0833 7.99999 17.0833H7.58332M3.83332 15.7288C2.06554 14.4409 0.916656 12.3546 0.916656 10C0.916656 6.08799 4.08797 2.91668 7.99999 2.91668H8.41666M8.83332 18.6667L7.16666 17L8.83332 15.3333M7.16666 4.66668L8.83332 3.00001L7.16666 1.33334"
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
