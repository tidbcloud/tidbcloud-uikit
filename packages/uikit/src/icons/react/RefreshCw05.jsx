import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw05 = (props, ref) => {
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
        d="M13.6352 8.59536C13.45 10.3353 12.4641 11.9658 10.8328 12.9076C8.12244 14.4724 4.65677 13.5438 3.09196 10.8335L2.92529 10.5448M2.36392 7.40467C2.54912 5.66474 3.53498 4.03426 5.16631 3.09241C7.87663 1.5276 11.3423 2.45623 12.9071 5.16655L13.0738 5.45523M2.32861 12.044L2.81665 10.2227L4.63801 10.7107M11.3614 5.28934L13.1828 5.77737L13.6708 3.95601"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw05)
const RefreshCw05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCw05', props.className].join(' ')}
    />
  )
})
RefreshCw05.displayName = 'IconRefreshCw05'
export default RefreshCw05
