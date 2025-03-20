import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignHorizontalCentre01 = (props, ref) => {
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
        d="M12 3v18m10-9h-6.5m0 0 4 4m-4-4 4-4M2 12h6.5m0 0-4 4m4-4-4-4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignHorizontalCentre01)
const AlignHorizontalCentre01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlignHorizontalCentre01'].join(' ')}
    />
  )
})
AlignHorizontalCentre01.displayName = 'IconAlignHorizontalCentre01'
export default AlignHorizontalCentre01
