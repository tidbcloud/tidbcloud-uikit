import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBeaker02 = (props, ref) => {
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
        d="M9 6v4.501c0 .551 0 .827-.069 1.082a2 2 0 0 1-.295.631c-.153.216-.364.393-.787.745L4.15 16.042c-.423.352-.634.529-.787.745a2 2 0 0 0-.295.631C3 17.672 3 17.947 3 18.5v.301c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 22 5.08 22 6.2 22h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 20.48 21 19.92 21 18.8v-.301c0-.551 0-.827-.069-1.082-.06-.226-.16-.44-.295-.631-.153-.216-.364-.393-.787-.745L16.15 12.96c-.423-.353-.634-.53-.787-.746a2 2 0 0 1-.295-.631C15 11.328 15 11.053 15 10.5V6M8.3 6h7.4c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219c.055-.107.055-.247.055-.527V2.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219C16.12 2 15.98 2 15.7 2H8.3c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219C7.5 2.38 7.5 2.52 7.5 2.8v2.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C7.88 6 8.02 6 8.3 6M5.5 17h13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038h-13c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C3 20.197 3 19.965 3 19.5s0-.697.038-.89a2 2 0 0 1 1.572-1.572C4.803 17 5.035 17 5.5 17"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBeaker02)
const Beaker02 = forwardRef((props, ref) => {
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
Beaker02.displayName = 'IconBeaker02'
export default Beaker02
