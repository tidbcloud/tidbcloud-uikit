import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignTopArrow02 = (props, ref) => {
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
        d="M10 18V6C10 5.06812 10 4.60218 9.84776 4.23463 9.64477 3.74458 9.25542 3.35523 8.76537 3.15224 8.39782 3 7.93188 3 7 3 6.06812 3 5.60218 3 5.23463 3.15224 4.74458 3.35523 4.35523 3.74458 4.15224 4.23463 4 4.60218 4 5.06812 4 6V18C4 18.9319 4 19.3978 4.15224 19.7654 4.35523 20.2554 4.74458 20.6448 5.23463 20.8478 5.60218 21 6.06812 21 7 21 7.93188 21 8.39782 21 8.76537 20.8478 9.25542 20.6448 9.64477 20.2554 9.84776 19.7654 10 19.3978 10 18.9319 10 18ZM20 14V6C20 5.06812 20 4.60218 19.8478 4.23463 19.6448 3.74458 19.2554 3.35523 18.7654 3.15224 18.3978 3 17.9319 3 17 3 16.0681 3 15.6022 3 15.2346 3.15224 14.7446 3.35523 14.3552 3.74458 14.1522 4.23463 14 4.60218 14 5.06812 14 6V14C14 14.9319 14 15.3978 14.1522 15.7654 14.3552 16.2554 14.7446 16.6448 15.2346 16.8478 15.6022 17 16.0681 17 17 17 17.9319 17 18.3978 17 18.7654 16.8478 19.2554 16.6448 19.6448 16.2554 19.8478 15.7654 20 15.3978 20 14.9319 20 14Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignTopArrow02)
const AlignTopArrow02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlignTopArrow02'].join(' ')}
    />
  )
})
AlignTopArrow02.displayName = 'IconAlignTopArrow02'
export default AlignTopArrow02
