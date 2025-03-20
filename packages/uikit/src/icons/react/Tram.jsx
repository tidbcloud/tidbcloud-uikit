import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTram = (props, ref) => {
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
        d="m18.5 3-.986-.493c-.378-.19-.567-.284-.765-.35a3 3 0 0 0-.541-.128C16 2 15.79 2 15.367 2H8.633c-.422 0-.634 0-.84.029a3 3 0 0 0-.541.128c-.199.066-.388.16-.765.35L5.5 3M11 6 9 2m4 4 2-4M4 13h16m-3 7 1 2M7 20l-1 2m2.5-5.5h.01m6.99 0h.01M8.8 20h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.72 20 16.88 20 15.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 6 16.88 6 15.2 6H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 8.28 4 9.12 4 10.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20m.2-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTram)
const Tram = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Tram'].join(' ')}
    />
  )
})
Tram.displayName = 'IconTram'
export default Tram
