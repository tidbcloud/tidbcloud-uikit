import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTextInput = (props, ref) => {
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
        d="M13 7H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 8.52 2 9.08 2 10.2v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 17 4.08 17 5.2 17H13m4-10h1.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 8.52 22 9.08 22 10.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 17 19.92 17 18.8 17H17m0 4V3m2.5 0h-5m5 18h-5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTextInput)
const TextInput = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'TextInput'].join(' ')}
    />
  )
})
TextInput.displayName = 'IconTextInput'
export default TextInput
