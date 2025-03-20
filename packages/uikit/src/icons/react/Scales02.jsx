import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconScales02 = (props, ref) => {
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
        d="M2.5 13h6m7 0h6M12 7v14m0-14a2.5 2.5 0 0 0 2.5-2.5M12 7a2.5 2.5 0 0 1-2.5-2.5M4 21h16M4 4.5h5.5m0 0a2.5 2.5 0 0 1 5 0m0 0H20M8.88 14.336C8.48 15.871 7.12 17 5.5 17s-2.98-1.13-3.38-2.664a1.4 1.4 0 0 1-.05-.438 3 3 0 0 1 .105-.653c.08-.237.167-.371.34-.64L5.5 8l2.986 4.606c.173.268.26.402.34.639.05.145.107.5.106.653-.002.25-.018.313-.051.438m13 0C21.48 15.871 20.12 17 18.5 17s-2.98-1.13-3.38-2.664c-.033-.125-.05-.188-.05-.438-.002-.154.055-.508.105-.653.08-.237.167-.371.34-.64L18.5 8l2.986 4.606c.173.268.26.402.34.639.05.145.107.5.106.653-.002.25-.018.313-.051.438"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconScales02)
const Scales02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Scales02'].join(' ')}
    />
  )
})
Scales02.displayName = 'IconScales02'
export default Scales02
