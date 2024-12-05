import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer01 = (props, ref) => {
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
        d="M6 6h.01M6 18h.01m-.81-8h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 8.48 22 7.92 22 6.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 2 19.92 2 18.8 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 10 4.08 10 5.2 10m0 12h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-1.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 14 19.92 14 18.8 14H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 15.52 2 16.08 2 17.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 22 4.08 22 5.2 22"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer01)
const Server01 = forwardRef((props, ref) => {
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
Server01.displayName = 'IconServer01'
export default Server01
