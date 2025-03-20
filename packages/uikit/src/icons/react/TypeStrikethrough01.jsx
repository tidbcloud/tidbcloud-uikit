import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTypeStrikethrough01 = (props, ref) => {
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
        d="M4 7V6c0-.541.215-1.032.564-1.392M9 20h6m-3-8v8M3 3l18 18M9.5 4H17c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C20 5.602 20 6.068 20 7m-8-3v2.5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTypeStrikethrough01)
const TypeStrikethrough01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'TypeStrikethrough01'].join(' ')}
    />
  )
})
TypeStrikethrough01.displayName = 'IconTypeStrikethrough01'
export default TypeStrikethrough01
