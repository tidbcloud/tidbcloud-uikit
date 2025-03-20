import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStrikethrough01 = (props, ref) => {
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
        d="M6 16a4 4 0 0 0 4 4h4a4 4 0 0 0 0-8m4-4a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4m-3 4h18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStrikethrough01)
const Strikethrough01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Strikethrough01'].join(' ')}
    />
  )
})
Strikethrough01.displayName = 'IconStrikethrough01'
export default Strikethrough01
