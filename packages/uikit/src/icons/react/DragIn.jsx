import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDragIn = (props, ref) => {
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
        d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m10.439-5.734h2.808c.361 0 .543 0 .633.074a.33.33 0 0 1 .12.263c-.003.117-.12.255-.356.532l-4.747 5.575c-.137.16-.205.241-.287.27a.32.32 0 0 1-.22 0c-.082-.029-.15-.11-.287-.27l-4.747-5.575c-.235-.277-.353-.415-.356-.532a.33.33 0 0 1 .12-.263c.09-.074.271-.074.633-.074h2.74a7.5 7.5 0 0 0-.717-2.738A7.5 7.5 0 0 0 6.817 4h.4c1.553 0 3.051.577 4.209 1.619a6.37 6.37 0 0 1 2.013 3.647"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDragIn)
const DragIn = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
DragIn.displayName = 'IconDragIn'
export default DragIn
