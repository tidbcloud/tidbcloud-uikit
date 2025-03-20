import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLeftIndent01 = (props, ref) => {
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
        d="M21 9.25h-9M21 4H3m18 10.75h-9M21 20H3M4.28 8.56l3.867 2.9c.29.217.434.326.486.459a.5.5 0 0 1 0 .362c-.052.133-.197.242-.486.459l-3.867 2.9c-.412.309-.618.463-.79.46a.5.5 0 0 1-.384-.192C3 15.773 3 15.515 3 15V9.2c0-.515 0-.772.106-.908A.5.5 0 0 1 3.49 8.1c.172-.003.378.151.79.46"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLeftIndent01)
const LeftIndent01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LeftIndent01'].join(' ')}
    />
  )
})
LeftIndent01.displayName = 'IconLeftIndent01'
export default LeftIndent01
