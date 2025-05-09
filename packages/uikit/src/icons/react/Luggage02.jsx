import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLuggage02 = (props, ref) => {
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
        d="M16 7c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C13.395 3 12.93 3 12 3s-1.395 0-1.777.102a3 3 0 0 0-2.12 2.122C8 5.605 8 6.07 8 7m4.8 10.5h4.9c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218c.055-.107.055-.247.055-.527v-2.4c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218c-.107-.055-.247-.055-.527-.055h-4.9c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218C12 13.88 12 14.02 12 14.3v2.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055m-6 3.5h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 7 18.88 7 17.2 7H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 9.28 2 10.12 2 11.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLuggage02)
const Luggage02 = forwardRef((props, ref) => {
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
Luggage02.displayName = 'IconLuggage02'
export default Luggage02
