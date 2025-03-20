import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPin02 = (props, ref) => {
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
        d="M8.377 15.616 2.72 21.273m8.974-14.631-1.56 1.56a2 2 0 0 1-.264.242 1 1 0 0 1-.207.111c-.082.032-.17.05-.347.085l-3.665.733c-.952.19-1.428.286-1.65.537a1 1 0 0 0-.243.8c.046.333.39.677 1.076 1.363l7.086 7.086c.686.687 1.03 1.03 1.362 1.076a1 1 0 0 0 .801-.242c.251-.223.346-.7.537-1.651l.733-3.665c.035-.176.053-.265.085-.347a1 1 0 0 1 .11-.207c.051-.072.115-.136.242-.263l1.561-1.561c.082-.082.122-.122.167-.158q.06-.047.126-.085c.05-.029.103-.051.208-.097l2.495-1.069c.727-.312 1.091-.467 1.256-.72a1 1 0 0 0 .144-.747c-.06-.295-.34-.575-.9-1.135l-5.142-5.143c-.56-.56-.84-.84-1.135-.9a1 1 0 0 0-.748.145c-.252.165-.407.529-.72 1.256l-1.068 2.495a2 2 0 0 1-.097.208 1 1 0 0 1-.085.126 2 2 0 0 1-.158.167"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPin02)
const Pin02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Pin02'].join(' ')}
    />
  )
})
Pin02.displayName = 'IconPin02'
export default Pin02
