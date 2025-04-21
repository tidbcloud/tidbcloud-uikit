import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerLeftDown = (props, ref) => {
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
        d="M14 2.66669H11.7333C9.49312 2.66669 8.37302 2.66669 7.51737 3.10266C6.76472 3.48615 6.1528 4.09808 5.76931 4.85072C5.33333 5.70637 5.33333 6.82648 5.33333 9.06669V13.3334M5.33333 13.3334L8.66667 10M5.33333 13.3334L2 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerLeftDown)
const CornerLeftDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerLeftDown', props.className].join(' ')}
    />
  )
})
CornerLeftDown.displayName = 'IconCornerLeftDown'
export default CornerLeftDown
