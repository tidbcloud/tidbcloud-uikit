import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin06 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 13.374c3.532.695 6 2.28 6 4.126 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.845 2.468-3.431 6-4.126M12 17V9m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        strokeWidth="inherit"
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
      className={[props.className, 'tiui-icon', 'MarkerPin06'].join(' ')}
    />
  )
})
MarkerPin06.displayName = 'IconMarkerPin06'
export default MarkerPin06
