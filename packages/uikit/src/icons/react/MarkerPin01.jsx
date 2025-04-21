import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin01 = (props, ref) => {
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
        d="M8.00002 8.66683C9.10459 8.66683 10 7.7714 10 6.66683C10 5.56226 9.10459 4.66683 8.00002 4.66683C6.89545 4.66683 6.00002 5.56226 6.00002 6.66683C6.00002 7.7714 6.89545 8.66683 8.00002 8.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.00002 14.6668C10.6667 12.0002 13.3334 9.61235 13.3334 6.66683C13.3334 3.72131 10.9455 1.3335 8.00002 1.3335C5.0545 1.3335 2.66669 3.72131 2.66669 6.66683C2.66669 9.61235 5.33335 12.0002 8.00002 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin01)
const MarkerPin01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin01', props.className].join(' ')}
    />
  )
})
MarkerPin01.displayName = 'IconMarkerPin01'
export default MarkerPin01
