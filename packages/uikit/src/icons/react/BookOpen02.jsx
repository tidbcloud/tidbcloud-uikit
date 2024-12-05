import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBookOpen02 = (props, ref) => {
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
        d="M12 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h.4c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C12 7.04 12 8.16 12 10.4m0 9.6v-9.6m0 9.6h6.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 18.48 22 17.92 22 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 4 19.92 4 18.8 4h-.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C12 7.04 12 8.16 12 10.4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBookOpen02)
const BookOpen02 = forwardRef((props, ref) => {
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
BookOpen02.displayName = 'IconBookOpen02'
export default BookOpen02
