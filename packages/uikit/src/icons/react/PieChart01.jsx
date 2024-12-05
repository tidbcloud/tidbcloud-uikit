import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart01 = (props, ref) => {
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
        d="M21.21 15.89A10 10 0 1 1 8 2.83m13.24 5.343a10 10 0 0 1 .728 3.028c.021.257.031.385-.02.5a.53.53 0 0 1-.22.239c-.11.06-.25.06-.528.06h-8.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C12 11.62 12 11.48 12 11.2V2.8c0-.278 0-.417.06-.528a.53.53 0 0 1 .239-.22c.115-.05.244-.04.5-.02a10 10 0 0 1 8.44 6.141"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart01)
const PieChart01 = forwardRef((props, ref) => {
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
PieChart01.displayName = 'IconPieChart01'
export default PieChart01
