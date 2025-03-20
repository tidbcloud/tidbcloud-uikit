import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShare06 = (props, ref) => {
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
        d="M20.791 12.607c.244-.209.366-.313.411-.438a.5.5 0 0 0 0-.338c-.045-.124-.167-.23-.41-.438L12.32 4.132c-.42-.36-.63-.54-.809-.545a.5.5 0 0 0-.4.184C11 3.91 11 4.186 11 4.74v4.296a9.666 9.666 0 0 0-8 9.516v.612a11.4 11.4 0 0 1 8-4.093v4.19c0 .554 0 .83.112.969a.5.5 0 0 0 .4.184c.178-.005.388-.185.809-.545z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShare06)
const Share06 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Share06'].join(' ')}
    />
  )
})
Share06.displayName = 'IconShare06'
export default Share06
