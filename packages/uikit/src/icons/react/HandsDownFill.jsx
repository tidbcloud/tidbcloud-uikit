import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHandsDownFill = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 22 22"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.9935 13.5H13.9998C16.9999 21.5 12.3994 21.5 12.3994 21.5 11.0782 21.5 11.0244 20.7258 10.9952 20.305 10.9876 20.1961 10.9817 20.1109 10.9559 20.0689 10.9559 17.1001 8.39189 14.6186 7.15377 13.5934 7.15377 13.5934 6.49993 13.015 6.49993 12.2359V1.98956C6.49993.517395 6.82346.51487 8.66206.500517L8.72787.5H17.4999C18.4999.5 19.2718 2.57381 19.2718 2.57381 21.4999 9.64184 21.4999 11.7447 21.4999 11.7447 21.4999 13.2051 19.9935 13.5 19.9935 13.5ZM1.5 13.5H4.55111C4.55111 13.5 5.40197 13.5109 5.40197 12.6511V1.98952C5.40197.514978 4.84.514978 4.15478.514978 3.78524.514978 3.47842.510614 3.19572.506594 2.95423.503159 2.73035.499973 2.5.499973 2 .499973 1.19171.999973 1.19171 1.99997 1.19171 2.58576.954353 5.74514.757719 8.36245.618679 10.2132.5 11.7929.5 12 .5 12.5.5 13.5 1.5 13.5Z"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHandsDownFill)
const HandsDownFill = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'HandsDownFill'].join(' ')}
    />
  )
})
HandsDownFill.displayName = 'IconHandsDownFill'
export default HandsDownFill
