import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget02 = (props, ref) => {
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
        d="M14.6668 8.00004H12.0002M4.00016 8.00004H1.3335M8.00016 4.00004V1.33337M8.00016 14.6667V12M13.3335 8.00004C13.3335 10.9456 10.9457 13.3334 8.00016 13.3334C5.05464 13.3334 2.66683 10.9456 2.66683 8.00004C2.66683 5.05452 5.05464 2.66671 8.00016 2.66671C10.9457 2.66671 13.3335 5.05452 13.3335 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget02)
const Target02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target02', props.className].join(' ')}
    />
  )
})
Target02.displayName = 'IconTarget02'
export default Target02
