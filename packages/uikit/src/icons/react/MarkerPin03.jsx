import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin03 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c1-5 8-5.582 8-12a8 8 0 1 0-16 0c0 6.418 7 7 8 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin03)
const MarkerPin03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MarkerPin03'].join(' ')}
    />
  )
})
MarkerPin03.displayName = 'IconMarkerPin03'
export default MarkerPin03
