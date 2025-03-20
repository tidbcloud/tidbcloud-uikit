import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignHorizontalCentre02 = (props, ref) => {
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
        d="M16 10C16.9319 10 17.3978 10 17.7654 9.84776 18.2554 9.64477 18.6448 9.25542 18.8478 8.76537 19 8.39782 19 7.93188 19 7 19 6.06812 19 5.60218 18.8478 5.23463 18.6448 4.74458 18.2554 4.35523 17.7654 4.15224 17.3978 4 16.9319 4 16 4L8 4C7.06812 4 6.60218 4 6.23463 4.15224 5.74458 4.35523 5.35523 4.74458 5.15224 5.23463 5 5.60218 5 6.06812 5 7 5 7.93188 5 8.39782 5.15224 8.76537 5.35523 9.25542 5.74458 9.64477 6.23463 9.84776 6.60218 10 7.06812 10 8 10L16 10ZM18 20C18.9319 20 19.3978 20 19.7654 19.8478 20.2554 19.6448 20.6448 19.2554 20.8478 18.7654 21 18.3978 21 17.9319 21 17 21 16.0681 21 15.6022 20.8478 15.2346 20.6448 14.7446 20.2554 14.3552 19.7654 14.1522 19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522 3.74458 14.3552 3.35523 14.7446 3.15224 15.2346 3 15.6022 3 16.0681 3 17 3 17.9319 3 18.3978 3.15224 18.7654 3.35523 19.2554 3.74458 19.6448 4.23463 19.8478 4.60218 20 5.06812 20 6 20L18 20Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignHorizontalCentre02)
const AlignHorizontalCentre02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlignHorizontalCentre02'].join(' ')}
    />
  )
})
AlignHorizontalCentre02.displayName = 'IconAlignHorizontalCentre02'
export default AlignHorizontalCentre02
