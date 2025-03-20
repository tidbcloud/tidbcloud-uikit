import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBold02 = (props, ref) => {
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
        d="M6 4v16M9.5 4h6a4 4 0 0 1 0 8h-6 7a4 4 0 0 1 0 8h-7m0-16v16m0-16H4m5.5 16H4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBold02)
const Bold02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Bold02'].join(' ')}
    />
  )
})
Bold02.displayName = 'IconBold02'
export default Bold02
