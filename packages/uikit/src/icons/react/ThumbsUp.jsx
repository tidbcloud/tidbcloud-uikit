import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThumbsUp = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M4.66659 14.6666V7.33325M1.33325 8.66659V13.3333C1.33325 14.0696 1.93021 14.6666 2.66659 14.6666H11.6174C12.6046 14.6666 13.4441 13.9464 13.5942 12.9707L14.3121 8.30403C14.4985 7.09252 13.5611 5.99992 12.3354 5.99992H9.99992C9.63173 5.99992 9.33325 5.70144 9.33325 5.33325V2.97714C9.33325 2.06925 8.59726 1.33325 7.68936 1.33325C7.47281 1.33325 7.27657 1.46078 7.18862 1.65867L4.84254 6.93734C4.73554 7.1781 4.4968 7.33325 4.23334 7.33325H2.66659C1.93021 7.33325 1.33325 7.93021 1.33325 8.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThumbsUp)
const ThumbsUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ThumbsUp', props.className].join(' ')}
    />
  )
})
ThumbsUp.displayName = 'IconThumbsUp'
export default ThumbsUp
