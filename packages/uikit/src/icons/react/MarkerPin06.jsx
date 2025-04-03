import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin06 = (props, ref) => {
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
        d="M10.6668 8.91629C13.0214 9.37923 14.6668 10.4365 14.6668 11.6667C14.6668 13.3235 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 13.3235 1.3335 11.6667C1.3335 10.4365 2.97896 9.37923 5.3335 8.91629M8.00016 11.3333V6M8.00016 6C9.10473 6 10.0002 5.10457 10.0002 4C10.0002 2.89543 9.10473 2 8.00016 2C6.89559 2 6.00016 2.89543 6.00016 4C6.00016 5.10457 6.89559 6 8.00016 6Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin06)
const MarkerPin06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin06', props.className].join(' ')}
    />
  )
})
MarkerPin06.displayName = 'IconMarkerPin06'
export default MarkerPin06
