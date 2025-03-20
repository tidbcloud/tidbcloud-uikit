import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMail05 = (props, ref) => {
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
        d="m13.744 2.634 7.528 4.893c.266.173.399.26.495.374a1 1 0 0 1 .189.348c.044.143.044.302.044.62V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V8.868c0-.317 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.115.229-.201.495-.374l7.528-4.893m3.488 0c-.631-.41-.947-.616-1.287-.696a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.696m3.488 0 6.192 4.024c.688.448 1.032.671 1.151.955a1 1 0 0 1 0 .774c-.12.284-.463.507-1.15.955l-6.193 4.024c-.631.41-.947.616-1.287.696-.3.07-.613.07-.914 0-.34-.08-.656-.285-1.287-.696L4.064 9.342c-.688-.448-1.032-.671-1.151-.955a1 1 0 0 1 0-.774c.12-.284.463-.507 1.15-.955l6.193-4.024M21.5 19l-6.643-6m-5.714 0L2.5 19"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMail05)
const Mail05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Mail05'].join(' ')}
    />
  )
})
Mail05.displayName = 'IconMail05'
export default Mail05
